import type React from 'react'
import type { GridApi } from '@mui/x-data-grid-premium'

/**
 * Clears the state of the column filter at `field`
 */
export function clearFilterState(
  apiRef: React.MutableRefObject<GridApi>,
  field: string,
): void {
  const filterType = apiRef.current.getColumn(field)?.filter?.type
  switch (filterType) {
    case 'text': {
      apiRef.current.state.textFilter.delete(field)
    }
    case 'numeric': {
      apiRef.current.state.numericFilter.delete(field)
    }
    case 'enum': {
      apiRef.current.state.enumFilter.delete(field)
    }
    case 'date': {
      apiRef.current.state.dateFilter.delete(field)
    }
    default: {
      return
    }
  }
}
