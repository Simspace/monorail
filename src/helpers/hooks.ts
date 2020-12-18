import {
  RefObject,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
import { useDebouncedCallback } from 'use-debounce'
import { flow } from 'fp-ts/lib/function'

import {
  defaultPopOverPosition,
  dropDirections,
  getOverlayPosition,
  PopOverPosition,
} from '@monorail/metaComponents/popOver/PopOver'
import { isNil, isNotNil } from '@monorail/sharedHelpers/typeGuards'

type UseEventListenerParams<E extends HTMLElement> = {
  element: E | null
  eventListener: EventListener
  eventName: keyof HTMLElementEventMap
  options?: boolean | AddEventListenerOptions
}

export function useEventListener<E extends HTMLElement>({
  element,
  eventListener,
  eventName,
  options,
}: UseEventListenerParams<E>) {
  useLayoutEffect(
    () => {
      /** Make sure element supports addEventListener */
      if (isNil(element) || isNil(element.addEventListener)) {
        return
      }

      element.addEventListener(eventName, eventListener, options)

      return () => {
        element.removeEventListener(eventName, eventListener, options)
      }
    },
    /**
     * Re-run effect if any change:
     *  `element`
     *  `eventListener`
     *  `eventName`
     *  `options`
     */ [element, eventListener, eventName, options],
  )
}

type RefCallbackNullType<T> = T | null

export function useRefCallback<T>(): [
  RefCallbackNullType<T>,
  (node: RefCallbackNullType<T>) => void,
] {
  const [element, setElement] = useState<RefCallbackNullType<T>>(null)

  const ref = useCallback((node: RefCallbackNullType<T>) => {
    if (node !== null) {
      setElement(node)
    }
  }, [])

  return [element, ref]
}

export function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef<() => void>()

  const tick = () => {
    if (isNotNil(savedCallback.current)) {
      savedCallback.current()
    }
  }

  const resetInterval = useCallback(() => {
    const id = setInterval(tick, delay)
    return () => clearInterval(id)
  }, [delay])

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    if (delay !== null) {
      return resetInterval()
    }

    return
  }, [delay, resetInterval])
}

export const useTimeout = (
  callback: () => void,
  timeout: number,
  cleanup = () => {},
) => {
  const timeoutIdRef = useRef<number | null>(null)

  // Track current callback/cleanup, so we do not re-trigger the effect when it changes, since this use case is uncommon and
  // counter-intuitive. Allows us to pass anonymous functions as props without re-rerenders thrashing the timeout
  const callbackRef = useRef(callback)
  useEffect(() => {
    callbackRef.current = callback
  }, [callback])
  const cleanupRef = useRef(cleanup)
  useEffect(() => {
    cleanupRef.current = cleanup
  }, [cleanup])

  useEffect(() => {
    clearTimeout(timeoutIdRef.current!) // non-null assert since clearTimeout does accept nulls
    timeoutIdRef.current = setTimeout(callbackRef.current, timeout)

    return () => {
      clearTimeout(timeoutIdRef.current!) // non-null assert since clearTimeout does accept nulls
      cleanupRef.current()
    }
  }, [timeout])
}

export function useInputDebounce<T extends unknown>({
  initialValue,
  onChange,
  delay = 500,
}: {
  initialValue: T
  onChange: (value: T) => void
  delay?: number
}): [T, (value: T) => void] {
  const [localValue, updateLocalValue] = useState<T>(initialValue)

  const [debouncedCallback] = useDebouncedCallback(onChange, delay)

  return [
    localValue,
    (newValue: T) => {
      debouncedCallback(newValue)
      updateLocalValue(newValue)
    },
  ]
}

/**
 * Helper toggle hook for usage with SimplePopOver
 */
export const useToggle = (initial: boolean) => {
  const [toggle, setToggle] = useState(initial)
  const setOn = useCallback(() => setToggle(true), [])
  const setOff = useCallback(() => setToggle(false), [])
  return [toggle, setOn, setOff] as const
}

/**
 * Helper function for getting the position of the modal for SimplePopOver
 */
export function getPosition(event: React.SyntheticEvent<Element>) {
  return getOverlayPosition({
    target: event.currentTarget,
    xDirection: dropDirections.Right,
    yDirection: dropDirections.Top,
  })
}

/**
 * Helper hook to calculate the PopOver position
 */
export const usePopOverPosition = (popOverPosition?: PopOverPosition) =>
  useState(popOverPosition ?? defaultPopOverPosition)

/**
 * Helper hook to use SimplePopOver
 */
export const useSimplePopOver = (popOverPosition?: PopOverPosition) => {
  const [isOpen, show, hide] = useToggle(false)
  const [position, setPosition] = usePopOverPosition(popOverPosition)
  const open = flow(getPosition, setPosition, show)

  return {
    hide,
    isOpen,
    open,
    position,
    setPosition,
    show,
  }
}

/**
 * For focusing an element on initial render. Returns a ref to assign to the
 * element that you want to focus.
 */
export const useRefFocusOnRender = <A extends HTMLElement>() => {
  const ref = useRef<A>(null)
  useFocusOnRender(ref)
  return ref
}

/**
 * For focusing an element on initial render. Takes a ref that is assigned to
 * the element that you want to focus.
 */
export const useFocusOnRender = <A extends HTMLElement>(ref: RefObject<A>) => {
  useEffect(() => {
    setTimeout(() => {
      ref.current?.focus()
    }, 0)
  }, [ref])
}
