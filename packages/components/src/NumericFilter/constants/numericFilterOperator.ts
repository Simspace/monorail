/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { GridFilterOperator } from '@mui/x-data-grid'

import { rangeFilterGetApplyFilterFn } from '../../RangeFilter.js'

export const numericFilterOperator: GridFilterOperator = {
  value: 'numeric',
  getApplyFilterFn: rangeFilterGetApplyFilterFn,
}
