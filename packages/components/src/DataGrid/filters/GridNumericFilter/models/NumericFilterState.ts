import type { NumericFilterOperator } from '@monorail/components/NumericFilter'
import { numericOperators } from '@monorail/components/NumericFilter'
import { RangeFilterStateTypeId } from '@monorail/components/RangeFilter'
import type { RangeFilterState } from '@monorail/components/RangeFilter.js'

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
