import { GridFilterOperator } from '@mui/x-data-grid-premium'

import { EnumFilterState, isEnumFilterState } from '../models'

export const enumFilterOperator: GridFilterOperator = {
  label: 'Enum',
  value: 'enum',
  getApplyFilterFn: filterItem => {
    // eslint-disable-next-line eqeqeq
    if (filterItem.value == null) {
      return null
    }
    if (!isEnumFilterState(filterItem.value)) {
      return null
    }
    return params =>
      (filterItem.value as EnumFilterState).selected.has(params.value)
  },
}
