import type { GridApi } from '@mui/x-data-grid-premium'

export function clearAllFilterState(
  apiRef: React.MutableRefObject<GridApi>,
): void {
  apiRef.current.state.textFilter.clear()
  apiRef.current.state.numericFilter.clear()
  apiRef.current.state.enumFilter.clear()
  apiRef.current.state.dateFilter.clear()
}
