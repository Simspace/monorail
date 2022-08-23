import { RangeFilterState, RangeFilterStateTypeId } from '../../RangeFilter.js'
import { dateOperators } from '../constants.js'
import { DateFilterOperator } from './DateFilterOperators.js'

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
