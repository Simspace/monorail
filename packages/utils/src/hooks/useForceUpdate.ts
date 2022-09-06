import React from 'react'

/**
 * Allows a component to be updated and re-rendered at will. This is most
 * commonly used when interacting with non-reactive mutable state.
 *
 * @returns A function that when called will force a render
 */
export function useForceUpdate(): () => void {
  const [, forceUpdate] = React.useState(false)
  return React.useCallback(() => {
    forceUpdate(b => !b)
  }, [])
}
