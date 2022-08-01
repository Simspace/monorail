import { GridFilterOperator } from '../../../internal'
import { isTextFilterState, TextFilterState } from '../models/TextFilterState'

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
          return String(params.value).includes(state.searchText)
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
