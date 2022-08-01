/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { GridValidRowModel } from '../../../internal'
import { RangeFilterOperator } from '../../RangeFilter'

export interface NumericFilterDefinition<
  R extends GridValidRowModel = any,
  V = any,
  F = V,
> {
  type: 'numeric'
}

declare module '../../../models/GridColumnFilterDefinition' {
  interface GridColumnFilterDefinitionMap<R, V, F> {
    Numeric: NumericFilterDefinition<R, V, F>
  }
}
