import React from 'react'
import type { Cancelable } from '@mui/utils/debounce'
import debounce from '@mui/utils/debounce'

/**
 * Returns a version of the `callback` parameter debounced by `wait`.
 * The internal callback will be updated as soon as the `callback` parameter changes,
 * without interrupting any scheduled debounce.
 *
 * @param callback A callback function that will be called after the debounce time is reached
 * @param wait The time by which to debounce the call of `callback`
 * @returns A function that will call `callback` when
 */
export function useDebouncedCallback<A extends ReadonlyArray<unknown>>(
  callback: (...args: A) => void,
  wait?: number,
): ((...args: A) => void) & Cancelable {
  // Put the callback in a Ref, so that any updates may be referenced later in the debounced closure
  const callbackRef = React.useRef(callback)

  // Update the callback function in the ref immediately, when `callback` changes
  React.useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return React.useCallback(
    debounce((...args) => {
      callbackRef.current(...args)
    }, wait),
    [wait],
  )
}
