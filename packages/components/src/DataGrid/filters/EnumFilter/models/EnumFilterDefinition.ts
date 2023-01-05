/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type React from 'react'
import type { GridValidRowModel } from '@mui/x-data-grid-premium'

import type { IconButtonProps } from '@monorail/components/IconButton'
import type { TextFieldProps } from '@monorail/components/TextField'

import type { ClearFilterButtonProps } from '../../components/ClearFilterButton.js'

export interface EnumFilterDefinition<
  R extends GridValidRowModel = any,
  V = any,
  F = V,
> {
  type: 'enum'
  values: Array<V>
  renderValue?: (value: V) => React.ReactNode
  componentsProps?: {
    columnHeaderButton?: Partial<IconButtonProps>
    search?: Partial<TextFieldProps>
    clearFilterButton?: Omit<
      Partial<ClearFilterButtonProps>,
      'onClick' | 'isFiltered'
    >
  }
  external?: boolean
}
