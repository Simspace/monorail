import React from 'react'

/**
 * A react hook that will track scheduled animation frame callbacks and
 * release all non-executed callbacks when unmounted.
 *
 * @returns A function that will schedule a callback to be executed
 * on the next animation frame
 */
export function useRequestAnimationFrame(): (
  callback: (time: number) => void,
) => void {
  const animationFrameHandlesRef = React.useRef<Set<number>>(new Set())
  React.useLayoutEffect(() => {
    return () => {
      if (animationFrameHandlesRef.current !== null) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        for (const handle of animationFrameHandlesRef.current) {
          cancelAnimationFrame(handle)
        }
      }
    }
  }, [])
  return callback => {
    const handle = requestAnimationFrame(time => {
      callback(time)
      animationFrameHandlesRef.current.delete(handle)
    })
    animationFrameHandlesRef.current.add(handle)
  }
}
