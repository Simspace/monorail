/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import type { GridFilterOperator } from '../../../internal.js'
import type { RangeFilterState } from '../models.js'
import { isRangeFilterState } from '../models.js'

export const rangeFilterGetApplyFilterFn: GridFilterOperator['getApplyFilterFn'] =
  filterItem => {
    // eslint-disable-next-line eqeqeq
    if (filterItem.value == null) {
      return null
    }
    if (!isRangeFilterState(filterItem.value)) {
      return null
    }
    const state = filterItem.value as RangeFilterState<string, unknown>
    if (state.operator.type === 'oneField' && state.first === null) {
      return null
    }
    if (
      state.operator.type === 'twoField' &&
      (state.first === null || state.second === null)
    ) {
      return null
    }
    return params => {
      if (state.operator.type === 'oneField') {
        return state.operator.predicate({
          value: state.first!,
          cell: params.value,
        })
      } else {
        return state.operator.predicate({
          first: state.first!,
          second: state.second!,
          cell: params.value,
        })
      }
    }
  }
