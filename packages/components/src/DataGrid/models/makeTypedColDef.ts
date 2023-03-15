/* eslint-disable @typescript-eslint/no-explicit-any */
import type { DistributiveOmit } from '@emotion/react'
import type { GridColDef, GridValidRowModel } from '@mui/x-data-grid'

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

export type MakeTypedColDef<
  R extends GridValidRowModel,
  Field extends string,
  V,
  F,
  Filter extends GridColFilterType,
> = DistributiveOmit<GridColDef<R, V, F>, GridColDefOmits> & {
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
