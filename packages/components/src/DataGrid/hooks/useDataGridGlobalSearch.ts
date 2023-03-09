import React from 'react'
import type { DataGridPremiumProcessedProps } from '@mui/x-data-grid-premium/models/dataGridPremiumProps'
import type { GridApiPremium } from '@mui/x-data-grid-premium/models/gridApiPremium'

import { useGridApiMethod } from '../internal.js'

export function useDataGridGlobalSearch(
  apiRef: React.MutableRefObject<GridApiPremium>,
  _props: Pick<DataGridPremiumProcessedProps, 'componentsProps'>,
): void {
  const setGlobalSearchValue = React.useCallback(
    (value: string) => {
      apiRef.current.state.globalSearch.value = value
      apiRef.current.state.globalSearch.forceUpdate()
    },
    [apiRef],
  )

  useGridApiMethod(apiRef, { setGlobalSearchValue }, 'globalSearchApi')
}
