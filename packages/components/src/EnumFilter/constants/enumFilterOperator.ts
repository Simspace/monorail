import type { GridFilterOperator } from '@mui/x-data-grid-premium'

import type { EnumFilterState } from '../models.js'
import { isEnumFilterState } from '../models.js'

export const enumFilterOperator: GridFilterOperator = {
  label: 'Enum',
  value: 'enum',
  getApplyFilterFn: filterItem => {
     
    if (filterItem.value == null) {
      return null
    }
    if (!isEnumFilterState(filterItem.value)) {
      return null
    }
    return value => {
      const state = filterItem.value as EnumFilterState

      if (state.compare !== undefined) {
        for (const selectedItem of state.selected) {
          if (state.compare(value, selectedItem)) {
            return true
          }
        }
        return false
      } else {
        return (filterItem.value as EnumFilterState).selected.has(value)
      }
    }
  },
}
