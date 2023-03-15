/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { IconButtonProps } from '@monorail/components/IconButton'
import type { SelectProps } from '@monorail/components/Select'
import type { TextFieldProps } from '@monorail/components/TextField'
import type { DataAttributes } from '@monorail/types'

import type { GridValidRowModel } from '../../../internal.js'
import type { ClearFilterButtonProps } from '../../components/ClearFilterButton.js'
import type { NumericFilterOperator } from './NumericFilterOperator.js'

export interface NumericFilterDefinition<
  R extends GridValidRowModel = any,
  V = any,
  F = V,
> {
  type: 'numeric'
  slotProps?: {
    columnHeaderButton?: Partial<IconButtonProps & DataAttributes>
    select?: Omit<
      Partial<SelectProps<NumericFilterOperator> & DataAttributes>,
      'onChange' | 'value' | 'onBlur'
    >
    firstTextField?: Omit<
      Partial<TextFieldProps & DataAttributes>,
      'value' | 'onChange' | 'placeholder'
    >
    secondTextField?: Omit<
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
