/* eslint-disable @typescript-eslint/no-explicit-any */
import type { GridValidRowModel } from '@mui/x-data-grid'
import type { GridColDef } from '@mui/x-data-grid-premium'

import type {
  GridColFilterType,
  GridColFilterTypeToDef,
} from './gridColFilterType.js'

type GridColDefOmits = 'field' | 'filter'

type MakeGridFilterTypeDef<
  Filter extends GridColFilterType,
  R,
  V,
  F,
> = Filter extends GridColFilterType
  ? GridColFilterTypeToDef<R, V, F>[Filter]
  : { type: Filter }

export interface MakeTypedColDef<
  R extends GridValidRowModel,
  Field extends string,
  V,
  F,
  Filter extends GridColFilterType,
> extends Omit<GridColDef<R, V, F>, GridColDefOmits> {
  /**
   * The column identifier. It's used to map with [[GridRowModel]] values.
   */
  field: Field
  /**
   * The column filter definition
   *
   * @default undefined
   */
  filter?: MakeGridFilterTypeDef<Filter, R, V, F>
}

export type ErasedMakeTypedColDef = MakeTypedColDef<any, any, any, any, any>
export type ErasedMakeTypedColDefs = ReadonlyArray<ErasedMakeTypedColDef>
