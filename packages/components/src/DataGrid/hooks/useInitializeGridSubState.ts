import React from 'react'
import type { GridApi, GridState } from '@mui/x-data-grid-premium'

export function useInitializeGridSubState<K extends keyof GridState>(
  apiRef: React.MutableRefObject<GridApi>,
  key: K,
  initializer: () => GridApi['state'][K],
) {
  const isInitialized = React.useRef(false)

  // eslint-disable-next-line eqeqeq
  if (!isInitialized.current && apiRef.current.state[key] == null) {
    apiRef.current.state[key] = initializer()
    isInitialized.current = true
  }
}
