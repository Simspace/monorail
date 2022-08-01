/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { GridValidRowModel } from '../../../internal'

export interface TextFilterDefinition<
  R extends GridValidRowModel = any,
  V = any,
  F = V,
> {
  type: 'text'
}

declare module '../../../models/GridColumnFilterDefinition' {
  interface GridColumnFilterDefinitionMap<R, V, F> {
    Text: TextFilterDefinition<R, V, F>
  }
}
