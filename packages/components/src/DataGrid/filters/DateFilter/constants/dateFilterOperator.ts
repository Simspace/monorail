import type { GridFilterOperator } from '../../../internal.js'
import { rangeFilterGetApplyFilterFn } from '../../RangeFilter.js'

export const dateFilterOperator: GridFilterOperator = {
  label: 'Date',
  value: 'date',
  getApplyFilterFn: rangeFilterGetApplyFilterFn,
}
