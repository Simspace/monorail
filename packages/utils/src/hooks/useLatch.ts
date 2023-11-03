import React from 'react'

/**
 * Prevents the changing of a value until a boolean condition is true.
 *
 * @param latch the boolean condition that must be true before the value can change
 * @param value the changing value
 * @returns the value that will change when the boolean condition is true
 */
export function useLatch<A>(latch: boolean, value: A): A {
  const [state, set] = React.useState(value)

  React.useEffect(() => {
    if (latch) {
      set(value)
    }
  }, [latch, value])

  return state
}
