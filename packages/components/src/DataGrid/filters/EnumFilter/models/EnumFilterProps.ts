/* eslint-disable @typescript-eslint/no-explicit-any */
import type { GridValidRowModel } from '../../../internal.js'
import type { EnumFilterClasses } from '../constants/enumFilterClasses.js'
import type { EnumFilterDefinition } from './EnumFilterDefinition.js'

export interface EnumFilterProps<
  R extends GridValidRowModel = any,
  V = any,
  F = V,
> extends Omit<EnumFilterDefinition<R, V, F>, 'type'> {
  classes?: Partial<EnumFilterClasses>
  field: string
}
