/* eslint-disable @typescript-eslint/no-explicit-any */
import type { DistributiveOmit } from '@emotion/react'
import type {
  GridColDef,
  GridValidRowModel,
  GridValueFormatter,
  GridValueGetter,
} from '@mui/x-data-grid'

import type {
  GridColFilterType,
  GridColFilterTypeToDef,
} from './gridColFilterType.js'

type GridColDefOmits = 'field' | 'filter' | 'valueGetter' | 'valueFormatter'

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
  VG,
  F,
  Filter extends GridColFilterType = never,
> = DistributiveOmit<GridColDef<R, V, F>, GridColDefOmits> & {
  /**
   * The column identifier. It's used to map with [[GridRowModel]] values.
   */
  field: Field

  /**
   * Function that allows to get a specific data instead of field to render in the cell.
   */
  valueGetter?: GridValueGetter<R, VG, F, V>

  /**
   * Function that allows to apply a formatter before rendering its value.
   */
  valueFormatter?: GridValueFormatter<
    R,
    [VG] extends [never] ? V : VG,
    F,
    [VG] extends [never] ? V : VG
  >

  /**
   * The column filter definition
   *
   * @default undefined
   */
  filter?: MakeGridFilterTypeDef<Filter, R, V, F>
}

export type ErasedMakeTypedColDef = MakeTypedColDef<
  any,
  any,
  any,
  any,
  any,
  any
>
export type ErasedMakeTypedColDefs = ReadonlyArray<ErasedMakeTypedColDef>
