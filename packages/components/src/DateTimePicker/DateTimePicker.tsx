import type { DateTimePickerProps as MuiDateTimePickerProps } from '@mui/x-date-pickers'
import { DateTimePicker as MuiDateTimePicker } from '@mui/x-date-pickers'

/**
 *
 * Demos:
 *
 * - [Date Time Picker](https://mui.com/x/react-date-pickers/date-time-picker/)
 * - [Pickers](https://mui.com/x/react-date-pickers/)
 *
 * API:
 *
 * - [DateTimePicker API](https://mui.com/x/api/date-pickers/date-time-picker/)
 */
export const DateTimePicker: typeof MuiDateTimePicker = MuiDateTimePicker

export interface DateTimePickerProps<TInputDate = Date, TDate = TInputDate>
  extends MuiDateTimePickerProps<TInputDate, TDate> {}

export * from '@mui/x-date-pickers/DateTimePicker'
