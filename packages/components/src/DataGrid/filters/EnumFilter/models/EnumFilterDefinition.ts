/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type React from 'react'
import type { GridValidRowModel } from '@mui/x-data-grid-premium'

export interface EnumFilterDefinition<
  R extends GridValidRowModel = any,
  V = any,
  F = V,
> {
  type: 'enum'
  values: Array<V>
  renderValue?: (value: V) => React.ReactNode
  external?: boolean
}
