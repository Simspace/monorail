/* eslint-disable @typescript-eslint/no-explicit-any */
import { GridValidRowModel } from '@mui/x-data-grid'

import { DateFilterDefinition, DateFilterState } from '../filters/DateFilter.js'
import { EnumFilterDefinition, EnumFilterState } from '../filters/EnumFilter.js'
import {
  NumericFilterDefinition,
  NumericFilterState,
} from '../filters/NumericFilter.js'
import { TextFilterDefinition, TextFilterState } from '../filters/TextFilter.js'

export interface GridColFilterTypeMap<R = GridValidRowModel, V = any, F = V> {
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
  R = GridValidRowModel,
  V = any,
  F = V,
> = GridColFilterTypeMap<R, V, F>[GridColFilterType]['state']

export type GridColFilterDef<R = GridValidRowModel, V = any, F = V> = [
  R,
  V,
  F,
] extends [infer R1, infer V1, infer F1]
  ? {
      [K in keyof GridColFilterTypeMap<R1, V1, F1>]: {
        type: K
      } & GridColFilterTypeMap<R1, V1, F1>[K]['config']
    }[keyof GridColFilterTypeMap<R1, V1, F1>]
  : never

export type GridColFilterTypeToDef<R = GridValidRowModel, V = any, F = V> = [
  R,
  V,
  F,
] extends [infer R1, infer V1, infer F1]
  ? {
      [K in keyof GridColFilterTypeMap<R1, V1, F1>]: {
        type: K
      } & GridColFilterTypeMap<R1, V1, F1>[K]['config']
    }
  : never

export type GridColFilterType = keyof GridColFilterTypeToDef
