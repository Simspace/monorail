/* eslint-disable @typescript-eslint/no-explicit-any */
import { GridValidRowModel } from '../../../internal'
import { EnumFilterDefinition } from './EnumFilterDefinition'

export interface EnumFilterProps<
  R extends GridValidRowModel = any,
  V = any,
  F = V,
> extends Omit<EnumFilterDefinition<R, V, F>, 'type'> {
  field: string
}
