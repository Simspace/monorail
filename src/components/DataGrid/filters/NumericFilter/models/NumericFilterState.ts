import { RangeFilterState, RangeFilterStateTypeId } from '../../RangeFilter'
import { numericOperators } from '../constants'
import { NumericFilterOperator } from './NumericFilterOperator'

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
