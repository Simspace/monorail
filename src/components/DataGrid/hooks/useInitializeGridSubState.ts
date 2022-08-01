import React from 'react'
import { GridApi, GridState } from '@mui/x-data-grid-premium'

export function useInitializeGridSubState<K extends keyof GridState>(
  apiRef: React.MutableRefObject<GridApi>,
  key: K,
  initializer: () => GridApi['state'][K],
) {
  const isInitialized = React.useRef(false)

  if (!isInitialized.current) {
    apiRef.current.state[key] = initializer()
    isInitialized.current = true
  }
}
