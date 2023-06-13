import type React from 'react'
import { useDataGridPremiumComponent } from '@mui/x-data-grid-premium/DataGridPremium/useDataGridPremiumComponent'
import type { DataGridPremiumProcessedProps } from '@mui/x-data-grid-premium/models/dataGridPremiumProps'
import type {
  GridApiPremium,
  GridPrivateApiPremium,
} from '@mui/x-data-grid-premium/models/gridApiPremium'

import { useDataGridGlobalSearch } from './useDataGridGlobalSearch.js'
import { useDataGridViewStyle } from './useDataGridViewStyle.js'
import { useGridRowReorder } from './useGridRowReorder.js'
import { useInitializeGridSubState } from './useInitializeGridSubState.js'
import { useSetRowIndex } from './useSetRowIndex.js'

export function useDataGridComponent(
  inputApiRef: React.MutableRefObject<GridApiPremium> | undefined,
  props: DataGridPremiumProcessedProps,
): React.MutableRefObject<GridPrivateApiPremium> {
  const apiRef = useDataGridPremiumComponent(inputApiRef, props)

  // The following two hooks include a custom implementation of grouped row reordering.
  // Once grouped row reordering is officially implemented in MUI, please remove these
  useGridRowReorder(apiRef, props)
  useSetRowIndex(apiRef)

  useInitializeGridSubState(apiRef, 'textFilter', () => new Map())
  useInitializeGridSubState(apiRef, 'dateFilter', () => new Map())
  useInitializeGridSubState(apiRef, 'enumFilter', () => new Map())
  useInitializeGridSubState(apiRef, 'numericFilter', () => new Map())
  useInitializeGridSubState(apiRef, 'filterSubscriptions', () => new Map())
  useInitializeGridSubState(apiRef, 'globalSearch', () => ({
    value: '',
    forceUpdate: () => {},
  }))
  useDataGridViewStyle(apiRef, props)
  useDataGridGlobalSearch(apiRef, props)
  return apiRef
}
