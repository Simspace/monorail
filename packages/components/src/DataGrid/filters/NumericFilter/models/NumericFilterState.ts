import type { RangeFilterState } from '../../RangeFilter.js'
import { RangeFilterStateTypeId } from '../../RangeFilter.js'
import { numericOperators } from '../constants.js'
import type { NumericFilterOperator } from './NumericFilterOperator.js'

export interface NumericFilterState
  extends RangeFilterState<NumericFilterOperator, number> {}

export function getNumericFilterInitialState(): NumericFilterState {
  return {
    [RangeFilterStateTypeId]: RangeFilterStateTypeId,
    operator: numericOperators.greaterThan,
    first: null,
    second: null,
  }
}
