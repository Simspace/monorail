/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { GridFilterOperator } from '../../../internal.js'
import { rangeFilterGetApplyFilterFn } from '../../RangeFilter.js'

export const numericFilterOperator: GridFilterOperator = {
  value: 'numeric',
  getApplyFilterFn: rangeFilterGetApplyFilterFn,
}
