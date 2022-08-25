import type { DatePickerProps as MuiDatePickerProps } from '@mui/x-date-pickers'
import { DatePicker as MuiDatePicker } from '@mui/x-date-pickers'

/**
 *
 * Demos:
 *
 * - [Date Picker](https://mui.com/x/react-date-pickers/date-picker/)
 * - [Pickers](https://mui.com/x/react-date-pickers/)
 *
 * API:
 *
 * - [DatePicker API](https://mui.com/x/api/date-pickers/date-picker/)
 */
export const DatePicker: typeof MuiDatePicker = MuiDatePicker

export interface DatePickerProps<TInputDate = Date, TDate = TInputDate>
  extends MuiDatePickerProps<TInputDate, TDate> {}

export * from '@mui/x-date-pickers/DatePicker'
