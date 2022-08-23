import { GridFilterOperator } from '../../../internal'
import { rangeFilterGetApplyFilterFn } from '../../RangeFilter'

export const dateFilterOperator: GridFilterOperator = {
  label: 'Date',
  value: 'date',
  getApplyFilterFn: rangeFilterGetApplyFilterFn,
}
