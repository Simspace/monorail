import type { GridFilterOperator } from '../../../internal.js'
import type { TextFilterState } from '../models/TextFilterState.js'
import { isTextFilterState } from '../models/TextFilterState.js'

export const textFilterOperator: GridFilterOperator = {
  label: 'Text',
  value: 'text',
  getApplyFilterFn: filterItem => {
    // eslint-disable-next-line eqeqeq
    if (filterItem.value == null) {
      return null
    }
    if (!isTextFilterState(filterItem.value)) {
      return null
    }

    return params => {
      const state = filterItem.value as TextFilterState
      switch (state.operator) {
        case 'contains': {
          return String(params.value)
            .toLocaleLowerCase()
            .includes(state.searchText.toLocaleLowerCase())
        }
        case 'exact': {
          if (state.searchText.length === 0) {
            return true
          }
          return String(params.value) === state.searchText
        }
      }
    }
  },
}
