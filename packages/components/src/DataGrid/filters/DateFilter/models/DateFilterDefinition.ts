/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { DatePickerProps } from '@monorail/components/DatePicker'
import type { IconButtonProps } from '@monorail/components/IconButton'
import type { SelectProps } from '@monorail/components/Select'
import type { DataAttributes } from '@monorail/types'

import type { GridValidRowModel } from '../../../internal.js'
import type { ClearFilterButtonProps } from '../../components/ClearFilterButton.js'
import type { DateFilterOperator } from './DateFilterOperators.js'

export interface DateFilterDefinition<
  R extends GridValidRowModel = any,
  V = any,
  F = V,
> {
  type: 'date'
  slotProps?: {
    columnHeaderButton?: Partial<IconButtonProps & DataAttributes>
    select?: Omit<
      Partial<SelectProps<DateFilterOperator> & DataAttributes>,
      'onChange' | 'value' | 'onBlur'
    >
    firstDatePicker?: Omit<
      Partial<DatePickerProps & DataAttributes>,
      'value' | 'onChange' | 'renderInput'
    >
    secondDatePicker?: Omit<
      Partial<DatePickerProps & DataAttributes>,
      'value' | 'onChange' | 'renderInput'
    >
    clearFilterButton?: Omit<
      Partial<ClearFilterButtonProps & DataAttributes>,
      'onClick' | 'isFiltered'
    >
  }
  external?: boolean
}
