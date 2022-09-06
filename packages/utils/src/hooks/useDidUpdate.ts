import React from 'react'

export function useDidUpdate(
  effect: React.EffectCallback,
  deps?: React.DependencyList,
): void {
  const mounted = React.useRef(false)
  React.useEffect(() => {
    if (mounted.current) {
      return effect()
    }
    mounted.current = true
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
