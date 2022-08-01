/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { GridValidRowModel } from '@mui/x-data-grid-premium'

export interface EnumFilterDefinition<
  R extends GridValidRowModel = any,
  V = any,
  F = V,
> {
  type: 'enum'
  values: Array<V>
  renderValue?: (value: V) => React.ReactNode
}

declare module '../../../models/GridColumnFilterDefinition' {
  interface GridColumnFilterDefinitionMap<R, V, F> {
    Enum: EnumFilterDefinition<R, V, F>
  }
}
