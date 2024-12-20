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
      break
    }
    case 'numeric': {
      apiRef.current.state.numericFilter.delete(field)
      break
    }
    case 'enum': {
      apiRef.current.state.enumFilter.delete(field)
      break
    }
    case 'date': {
      apiRef.current.state.dateFilter.delete(field)
      break
    }
    default: {
      return
    }
  }
}
