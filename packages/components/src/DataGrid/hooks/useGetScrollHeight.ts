import React from 'react'
import { useGridApiMethod } from '@mui/x-data-grid'
import type { GridPrivateApiPremium } from '@mui/x-data-grid-premium/models/gridApiPremium'

export function useGetScrollHeight(
  apiRef: React.MutableRefObject<GridPrivateApiPremium>,
) {
  const getScrollHeight = React.useCallback(() => {
    return apiRef.current.virtualScrollerRef?.current?.scrollHeight ?? null
  }, [apiRef])

  useGridApiMethod(
    apiRef,
    {
      getScrollHeight,
    },
    'public',
  )
}
