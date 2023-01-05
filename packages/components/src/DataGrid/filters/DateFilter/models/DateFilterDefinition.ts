/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { DatePickerProps } from '@monorail/components/DatePicker'
import type { IconButtonProps } from '@monorail/components/IconButton'
import type { SelectProps } from '@monorail/components/Select'

import type { GridValidRowModel } from '../../../internal.js'
import type { ClearFilterButtonProps } from '../../components/ClearFilterButton.js'
import type { DateFilterOperator } from './DateFilterOperators.js'

export interface DateFilterDefinition<
  R extends GridValidRowModel = any,
  V = any,
  F = V,
> {
  type: 'date'
  componentsProps?: {
    columnHeaderButton?: Partial<IconButtonProps>
    select?: Omit<
      Partial<SelectProps<DateFilterOperator>>,
      'onChange' | 'value' | 'onBlur'
    >
    firstDatePicker?: Omit<
      Partial<DatePickerProps>,
      'value' | 'onChange' | 'renderInput'
    >
    secondDatePicker?: Omit<
      Partial<DatePickerProps>,
      'value' | 'onChange' | 'renderInput'
    >
    clearFilterButton?: Omit<
      Partial<ClearFilterButtonProps>,
      'onClick' | 'isFiltered'
    >
  }
  external?: boolean
}
