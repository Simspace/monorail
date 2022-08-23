import { RangeFilterState, RangeFilterStateTypeId } from '../../RangeFilter'
import { dateOperators } from '../constants'
import { DateFilterOperator } from './DateFilterOperators'

export interface DateFilterState
  extends RangeFilterState<DateFilterOperator, Date> {}

export function getDateFilterInitialState(): DateFilterState {
  return {
    [RangeFilterStateTypeId]: RangeFilterStateTypeId,
    operator: dateOperators.on,
    first: null,
    second: null,
  }
}
