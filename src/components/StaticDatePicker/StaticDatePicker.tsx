import {
  StaticDatePicker as MuiStaticDatePicker,
  StaticDatePickerProps as MuiStaticDatePickerProps,
} from '@mui/x-date-pickers/StaticDatePicker'

export const StaticDatePicker: typeof MuiStaticDatePicker = MuiStaticDatePicker

export interface StaticDatePickerProps<TInputDate = Date, TDate = TInputDate>
  extends MuiStaticDatePickerProps<TInputDate, TDate> {}

export * from '@mui/x-date-pickers/StaticDatePicker'
