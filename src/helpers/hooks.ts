import { useCallback, useLayoutEffect, useState } from 'react'

import { isNil } from '@monorail/sharedHelpers/typeGuards'

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
  (node: RefCallbackNullType<T>) => void
] {
  const [element, setElement] = useState<RefCallbackNullType<T>>(null)

  const ref = useCallback((node: RefCallbackNullType<T>) => {
    if (node !== null) {
      setElement(node)
    }
  }, [])

  return [element, ref]
}
