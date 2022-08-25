import type { IUtils } from '@date-io/core/IUtils'

import type { RangeFilterState } from '../../RangeFilter.js'
import { RangeFilterStateTypeId } from '../../RangeFilter.js'
import { getDateOperators } from '../constants.js'
import type { DateFilterOperator } from './DateFilterOperators.js'

export interface DateFilterState<TDate = Date>
  extends RangeFilterState<DateFilterOperator, TDate> {}

export function getDateFilterInitialState<TDate = Date>(
  adapter: IUtils<TDate>,
): DateFilterState<TDate> {
  return {
    [RangeFilterStateTypeId]: RangeFilterStateTypeId,
    operator: getDateOperators(adapter).on,
    first: null,
    second: null,
  }
}
