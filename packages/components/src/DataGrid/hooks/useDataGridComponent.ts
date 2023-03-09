import { useDataGridPremiumComponent } from '@mui/x-data-grid-premium/DataGridPremium/useDataGridPremiumComponent'
import type { DataGridPremiumProcessedProps } from '@mui/x-data-grid-premium/models/dataGridPremiumProps'
import type { GridApiPremium } from '@mui/x-data-grid-premium/models/gridApiPremium'

import { useDataGridGlobalSearch } from './useDataGridGlobalSearch.js'
import { useDataGridViewStyle } from './useDataGridViewStyle.js'
import { useInitializeGridSubState } from './useInitializeGridSubState.js'

export function useDataGridComponent(
  inputApiRef: React.MutableRefObject<GridApiPremium> | undefined,
  props: DataGridPremiumProcessedProps,
): React.MutableRefObject<GridApiPremium> {
  const apiRef = useDataGridPremiumComponent(inputApiRef, props)
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
