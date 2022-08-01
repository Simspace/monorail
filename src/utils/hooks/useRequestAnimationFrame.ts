import React from 'react'

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
