/* eslint-disable @typescript-eslint/no-explicit-any */
import type { GridValidRowModel } from '@mui/x-data-grid'

import type {
  DateFilterDefinition,
  DateFilterState,
} from '../filters/DateFilter.js'
import type {
  EnumFilterDefinition,
  EnumFilterState,
} from '../filters/EnumFilter.js'
import type {
  NumericFilterDefinition,
  NumericFilterState,
} from '../filters/NumericFilter.js'
import type {
  TextFilterDefinition,
  TextFilterState,
} from '../filters/TextFilter.js'

export interface GridColFilterTypeMap<
  R extends GridValidRowModel = GridValidRowModel,
  V = any,
  F = V,
> {
  enum: {
    state: EnumFilterState<V>
    config: Omit<EnumFilterDefinition<R, V, F>, 'type'>
  }
  date: {
    state: DateFilterState
    config: Omit<DateFilterDefinition, 'type'>
  }
  numeric: {
    state: NumericFilterState
    config: Omit<NumericFilterDefinition, 'type'>
  }
  text: {
    state: TextFilterState
    config: Omit<TextFilterDefinition<R, V, F>, 'type'>
  }
}

export type GridColFilterState<
  R extends GridValidRowModel = GridValidRowModel,
  V = any,
  F = V,
> = GridColFilterTypeMap<R, V, F>[GridColFilterType]['state']

export type GridColFilterDef<
  R extends GridValidRowModel = GridValidRowModel,
  V = any,
  F = V,
> = [R, V, F] extends [infer R1, infer V1, infer F1]
  ? R1 extends GridValidRowModel
    ? {
        [K in keyof GridColFilterTypeMap<R1, V1, F1>]: {
          type: K
        } & GridColFilterTypeMap<R1, V1, F1>[K]['config']
      }[keyof GridColFilterTypeMap<R1, V1, F1>]
    : never
  : never

export type GridColFilterTypeToDef<R = GridValidRowModel, V = any, F = V> = [
  R,
  V,
  F,
] extends [infer R1, infer V1, infer F1]
  ? R1 extends GridValidRowModel
    ? {
        [K in keyof GridColFilterTypeMap<R1, V1, F1>]: {
          type: K
        } & GridColFilterTypeMap<R1, V1, F1>[K]['config']
      }
    : never
  : never

export type GridColFilterType = keyof GridColFilterTypeToDef
