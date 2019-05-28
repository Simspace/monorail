import { useLayoutEffect } from 'react'

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
