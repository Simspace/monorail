"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useEventListener = useEventListener;
exports.useRefCallback = useRefCallback;

var _react = require("react");

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