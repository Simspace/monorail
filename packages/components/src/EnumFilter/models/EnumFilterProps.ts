/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ClearFilterButtonProps } from '@monorail/components/ClearFilterButton'
import type { ListProps } from '@monorail/components/List'
import type { TextFieldProps } from '@monorail/components/TextField'
import type { DataAttributes } from '@monorail/types'

import type { EnumFilterClasses } from '../constants/enumFilterClasses.js'
import type { EnumFilterItemProps } from '../EnumFilter.js'
import type { EnumFilterLocaleText } from './EnumFilterLocaleText.js'

export interface EnumFilterProps<V = any> {
  classes?: Partial<EnumFilterClasses>
  values: Array<V>
  renderValue?: (value: V) => React.ReactNode
  stringifyValue?: (value: V) => string
  onChange?: (values: Set<V>) => void
  slotProps?: {
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
  localeText: EnumFilterLocaleText
}
