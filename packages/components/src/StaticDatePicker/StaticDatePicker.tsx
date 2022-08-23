import {
  StaticDatePicker as MuiStaticDatePicker,
  StaticDatePickerProps as MuiStaticDatePickerProps,
} from '@mui/x-date-pickers/StaticDatePicker'

/**
 *
 * Demos:
 *
 * - [Date Picker](https://mui.com/x/react-date-pickers/date-picker/)
 *
 * API:
 *
 * - [StaticDatePicker API](https://mui.com/x/api/date-pickers/static-date-picker/)
 */
export const StaticDatePicker: typeof MuiStaticDatePicker = MuiStaticDatePicker

export interface StaticDatePickerProps<TInputDate = Date, TDate = TInputDate>
  extends MuiStaticDatePickerProps<TInputDate, TDate> {}

export * from '@mui/x-date-pickers/StaticDatePicker'
