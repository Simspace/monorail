/* eslint-disable @typescript-eslint/no-explicit-any */
import { GridValidRowModel } from '@mui/x-data-grid'
import { GridColDef } from '@mui/x-data-grid-premium'

import { GridColFilterType, GridColFilterTypeToDef } from './gridColFilterType'

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
  field: Field
  filter?: MakeGridFilterTypeDef<Filter, R, V, F>
}

export type ErasedMakeTypedColDef = MakeTypedColDef<any, any, any, any, any>
export type ErasedMakeTypedColDefs = ReadonlyArray<ErasedMakeTypedColDef>
