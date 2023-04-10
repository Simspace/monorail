import type { DatePickerProps as MuiDatePickerProps } from '@mui/x-date-pickers'
import { DatePicker as MuiDatePicker } from '@mui/x-date-pickers'

/**
 *
 * Demos:
 *
 * - [Date Picker](https://simspace.github.io/monorail/main/storybook/?path=/docs/inputs-date-and-time-date-datepicker--default)
 * - [Date Picker (MUI)](https://mui.com/x/react-date-pickers/date-picker/)
 * - [Pickers (MUI)](https://mui.com/x/react-date-pickers/)
 *
 * API:
 *
 * - [DatePicker API](https://mui.com/x/api/date-pickers/date-picker/)
 */
export const DatePicker: typeof MuiDatePicker = MuiDatePicker

export interface DatePickerProps<TDate = Date>
  extends MuiDatePickerProps<TDate> {}

export * from '@mui/x-date-pickers/DatePicker'
