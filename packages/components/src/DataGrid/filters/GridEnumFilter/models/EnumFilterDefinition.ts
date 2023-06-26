/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type React from 'react'
import type { GridValidRowModel } from '@mui/x-data-grid-premium'

import type { ClearFilterButtonProps } from '@monorail/components/ClearFilterButton'
import type { EnumFilterItemProps } from '@monorail/components/EnumFilter'
import type { IconButtonProps } from '@monorail/components/IconButton'
import type { ListProps } from '@monorail/components/List'
import type { TextFieldProps } from '@monorail/components/TextField'
import type { DataAttributes } from '@monorail/types'

export interface EnumFilterDefinition<
  R extends GridValidRowModel = any,
  V = any,
  F = V,
> {
  type: 'enum'
  values: Array<V>
  compare?: (rowValue: V, filterValue: V) => boolean
  renderValue?: (value: V) => React.ReactNode
  slotProps?: {
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
