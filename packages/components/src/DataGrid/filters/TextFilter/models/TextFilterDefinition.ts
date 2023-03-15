/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { IconButtonProps } from '@monorail/components/IconButton'
import type { SelectProps } from '@monorail/components/Select'
import type { TextFieldProps } from '@monorail/components/TextField'
import type { DataAttributes } from '@monorail/types'

import type { GridValidRowModel } from '../../../internal.js'
import type { ClearFilterButtonProps } from '../../components/ClearFilterButton.js'
import type { TextFilterOperator } from './TextFilterOperator.js'

export interface TextFilterDefinition<
  R extends GridValidRowModel = any,
  V = any,
  F = V,
> {
  type: 'text'
  slotProps?: {
    columnHeaderButton?: Partial<IconButtonProps & DataAttributes>
    select?: Omit<
      Partial<SelectProps<TextFilterOperator> & DataAttributes>,
      'onChange' | 'value' | 'onBlur'
    >
    textField?: Omit<
      Partial<TextFieldProps & DataAttributes>,
      'value' | 'onChange' | 'placeholder'
    >
    clearFilterButton?: Omit<
      Partial<ClearFilterButtonProps & DataAttributes>,
      'onClick' | 'isFiltered'
    >
  }
  external?: boolean
}
