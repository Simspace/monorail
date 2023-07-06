import { rangeFilterGetApplyFilterFn } from '@monorail/components/RangeFilter'

import type { GridFilterOperator } from '../../../internal.js'

export const dateFilterOperator: GridFilterOperator = {
  label: 'Date',
  value: 'date',
  getApplyFilterFn: rangeFilterGetApplyFilterFn,
}
