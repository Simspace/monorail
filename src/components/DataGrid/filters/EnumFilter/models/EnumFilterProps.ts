/* eslint-disable @typescript-eslint/no-explicit-any */
import { GridValidRowModel } from '../../..'
import { EnumFilterDefinition } from './EnumFilterDefinition'

export interface EnumFilterProps<
  R extends GridValidRowModel = any,
  V = any,
  F = V,
> {
  def: EnumFilterDefinition<R, V, F>
  field: string
}
