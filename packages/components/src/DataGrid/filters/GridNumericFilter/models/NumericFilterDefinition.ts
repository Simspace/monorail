 
 
import type { ClearFilterButtonProps } from '@monorail/components/ClearFilterButton'
import type { IconButtonProps } from '@monorail/components/IconButton'
import type { NumericFilterOperator } from '@monorail/components/NumericFilter'
import type { SelectProps } from '@monorail/components/Select'
import type { TextFieldProps } from '@monorail/components/TextField'
import type { DataAttributes } from '@monorail/types'

export interface NumericFilterDefinition {
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
