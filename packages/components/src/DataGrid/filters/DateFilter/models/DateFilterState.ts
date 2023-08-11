import type { ExtendableDateType } from '@date-io/core/IUtils'
import type { MuiPickersAdapter } from '@mui/x-date-pickers/models'

import { RangeFilterStateTypeId } from '@monorail/components/RangeFilter'
import type { RangeFilterState } from '@monorail/components/RangeFilter.js'

import { getDateOperators } from '../constants.js'
import type { DateFilterOperator } from './DateFilterOperators.js'

export interface DateFilterState<TDate = Date>
  extends RangeFilterState<DateFilterOperator, TDate> {}

export function getDateFilterInitialState<
  TDate extends ExtendableDateType = Date,
>(adapter: MuiPickersAdapter<TDate>): DateFilterState<TDate> {
  return {
    [RangeFilterStateTypeId]: RangeFilterStateTypeId,
    operator: getDateOperators(adapter).on,
    first: null,
    second: null,
  }
}
