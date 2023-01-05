/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { IconButtonProps } from '@monorail/components/IconButton'
import type { SelectProps } from '@monorail/components/Select'
import type { TextFieldProps } from '@monorail/components/TextField'

import type { GridValidRowModel } from '../../../internal.js'
import type { ClearFilterButtonProps } from '../../components/ClearFilterButton.js'
import type { NumericFilterOperator } from './NumericFilterOperator.js'

export interface NumericFilterDefinition<
  R extends GridValidRowModel = any,
  V = any,
  F = V,
> {
  type: 'numeric'
  componentsProps?: {
    columnHeaderButton?: Partial<IconButtonProps>
    select?: Omit<
      Partial<SelectProps<NumericFilterOperator>>,
      'onChange' | 'value' | 'onBlur'
    >
    firstTextField?: Omit<
      Partial<TextFieldProps>,
      'value' | 'onChange' | 'placeholder'
    >
    secondTextField?: Omit<
      Partial<TextFieldProps>,
      'value' | 'onChange' | 'placeholder'
    >
    clearFilterButton?: Omit<
      Partial<ClearFilterButtonProps>,
      'onClick' | 'isFiltered'
    >
  }
  external?: boolean
}
