import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
import { useDebouncedCallback } from 'use-debounce'

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
  useLayoutEffect(() => {
    /** Make sure element supports addEventListener */
    if (isNil(element) || isNil(element.addEventListener)) {
      return
    }

    element.addEventListener(eventName, eventListener, options)

    return () => {
      element.removeEventListener(eventName, eventListener, options)
    }
  }, /**
   * Re-run effect if any change:
   *  `element`
   *  `eventListener`
   *  `eventName`
   *  `options`
   */ [element, eventListener, eventName, options])
}

type RefCallbackNullType<T extends HTMLDivElement> = T | null

export function useRefCallback<T extends HTMLDivElement>(): [
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
