import { useDataGridPremiumComponent } from '@mui/x-data-grid-premium/DataGridPremium/useDataGridPremiumComponent'
import type { DataGridPremiumProcessedProps } from '@mui/x-data-grid-premium/models/dataGridPremiumProps'
import type { GridApiPremium } from '@mui/x-data-grid-premium/models/gridApiPremium'

import { useDataGridViewStyle } from './useDataGridViewStyle.js'

export function useDataGridComponent(
  inputApiRef: React.MutableRefObject<GridApiPremium> | undefined,
  props: DataGridPremiumProcessedProps,
): React.MutableRefObject<GridApiPremium> {
  const apiRef = useDataGridPremiumComponent(inputApiRef, props)
  useDataGridViewStyle(apiRef, props)
  return apiRef
}
