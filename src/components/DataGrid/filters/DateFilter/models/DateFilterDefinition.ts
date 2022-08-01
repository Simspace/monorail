/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { GridValidRowModel } from '../../../internal'

export interface NumericFilterDefinition<
  R extends GridValidRowModel = any,
  V = any,
  F = V,
> {
  type: 'date'
}

declare module '../../../models/GridColumnFilterDefinition' {
  interface GridColumnFilterDefinitionMap<R, V, F> {
    Date: NumericFilterDefinition<R, V, F>
  }
}
