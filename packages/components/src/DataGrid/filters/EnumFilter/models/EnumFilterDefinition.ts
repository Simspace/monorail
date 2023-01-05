/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type React from 'react'
import type { GridValidRowModel } from '@mui/x-data-grid-premium'

import type { IconButtonProps } from '@monorail/components/IconButton'
import type { ListProps } from '@monorail/components/List'
import type { TextFieldProps } from '@monorail/components/TextField'
import type { DataAttributes } from '@monorail/types'

import type { ClearFilterButtonProps } from '../../components/ClearFilterButton.js'
import type { EnumFilterItemProps } from '../EnumFilter.js'

export interface EnumFilterDefinition<
  R extends GridValidRowModel = any,
  V = any,
  F = V,
> {
  type: 'enum'
  values: Array<V>
  renderValue?: (value: V) => React.ReactNode
  componentsProps?: {
    columnHeaderButton?: Partial<IconButtonProps & DataAttributes>
    search?: Partial<TextFieldProps & DataAttributes>
    clearFilterButton?: Omit<
      Partial<ClearFilterButtonProps & DataAttributes>,
      'onClick' | 'isFiltered'
    >
    list?: Partial<ListProps & DataAttributes>
    listItem?: Omit<
      Partial<EnumFilterItemProps & DataAttributes>,
      'onClick' | 'label' | 'checked'
    >
  }
  external?: boolean
}
