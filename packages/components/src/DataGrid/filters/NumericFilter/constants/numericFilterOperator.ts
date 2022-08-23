/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { GridFilterOperator } from '../../../internal'
import { rangeFilterGetApplyFilterFn } from '../../RangeFilter'

export const numericFilterOperator: GridFilterOperator = {
  value: 'numeric',
  getApplyFilterFn: rangeFilterGetApplyFilterFn,
}
