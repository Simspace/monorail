/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { GridValidRowModel } from '../internal'

export interface GridColumnFilterDefinitionMap<
  R extends GridValidRowModel = any,
  V = any,
  F = V,
> {}

export type GridColumnFilterDefinitionKey = keyof GridColumnFilterDefinitionMap

export type GridColumnFilterDefinition<
  R extends GridValidRowModel = any,
  V = any,
  F = V,
> = GridColumnFilterDefinitionMap<R, V, F>[GridColumnFilterDefinitionKey]
