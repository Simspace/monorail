"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useEventListener = useEventListener;
exports.useRefCallback = useRefCallback;
exports.useInterval = useInterval;
exports.useInputDebounce = useInputDebounce;
exports.useTimeout = void 0;

var _react = require("react");

var _useDebounce = require("use-debounce");

var _typeGuards = require("../sharedHelpers/typeGuards");

function useEventListener({
  element,
  eventListener,
  eventName,
  options
}) {
  (0, _react.useLayoutEffect)(() => {
    /** Make sure element supports addEventListener */
    if ((0, _typeGuards.isNil)(element) || (0, _typeGuards.isNil)(element.addEventListener)) {
      return;
    }

    element.addEventListener(eventName, eventListener, options);
    return () => {
      element.removeEventListener(eventName, eventListener, options);
    };
  },
  /**
   * Re-run effect if any change:
   *  `element`
   *  `eventListener`
   *  `eventName`
   *  `options`
   */
  [element, eventListener, eventName, options]);
}

function useRefCallback() {
  const [element, setElement] = (0, _react.useState)(null);
  const ref = (0, _react.useCallback)(node => {
    if (node !== null) {
      setElement(node);
    }
  }, []);
  return [element, ref];
}

function useInterval(callback, delay) {
  const savedCallback = (0, _react.useRef)();

  const tick = () => {
    if ((0, _typeGuards.isNotNil)(savedCallback.current)) {
      savedCallback.current();
    }
  };

  const resetInterval = (0, _react.useCallback)(() => {
    const id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]); // Remember the latest callback.

  (0, _react.useEffect)(() => {
    savedCallback.current = callback;
  }, [callback]); // Set up the interval.

  (0, _react.useEffect)(() => {
    if (delay !== null) {
      return resetInterval();
    }

    return;
  }, [delay, resetInterval]);
}

const useTimeout = (callback, timeout, cleanup = () => {}) => {
  const timeoutIdRef = (0, _react.useRef)(null); // Track current callback/cleanup, so we do not re-trigger the effect when it changes, since this use case is uncommon and
  // counter-intuitive. Allows us to pass anonymous functions as props without re-rerenders thrashing the timeout

  const callbackRef = (0, _react.useRef)(callback);
  (0, _react.useEffect)(() => {
    callbackRef.current = callback;
  }, [callback]);
  const cleanupRef = (0, _react.useRef)(cleanup);
  (0, _react.useEffect)(() => {
    cleanupRef.current = cleanup;
  }, [cleanup]);
  (0, _react.useEffect)(() => {
    clearTimeout(timeoutIdRef.current); // non-null assert since clearTimeout does accept nulls

    timeoutIdRef.current = setTimeout(callbackRef.current, timeout);
    return () => {
      clearTimeout(timeoutIdRef.current); // non-null assert since clearTimeout does accept nulls

      cleanupRef.current();
    };
  }, [timeout]);
};

exports.useTimeout = useTimeout;

function useInputDebounce({
  initialValue,
  onChange,
  delay = 500
}) {
  const [localValue, updateLocalValue] = (0, _react.useState)(initialValue);
  const [debouncedCallback] = (0, _useDebounce.useDebouncedCallback)(onChange, delay);
  return [localValue, newValue => {
    debouncedCallback(newValue);
    updateLocalValue(newValue);
  }];
}