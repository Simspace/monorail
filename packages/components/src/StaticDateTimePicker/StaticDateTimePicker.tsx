import type { StaticDateTimePickerProps as MuiStaticDateTimePickerProps } from '@mui/x-date-pickers'
import { StaticDateTimePicker as MuiStaticDateTimePicker } from '@mui/x-date-pickers'

/**
 *
 * Demos:
 *
 * - [Date Time Picker](https://mui.com/x/react-date-pickers/date-time-picker/)
 *
 * API:
 *
 * - [StaticDateTimePicker API](https://mui.com/x/api/date-pickers/static-date-time-picker/)
 */
export const StaticDateTimePicker: typeof MuiStaticDateTimePicker =
  MuiStaticDateTimePicker

export interface StaticDateTimePickerProps<
  TInputDate = Date,
  TDate = TInputDate,
> extends MuiStaticDateTimePickerProps<TInputDate, TDate> {}

export * from '@mui/x-date-pickers/StaticDateTimePicker'
