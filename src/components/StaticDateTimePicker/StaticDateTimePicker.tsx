import {
  StaticDateTimePicker as MuiStaticDateTimePicker,
  StaticDateTimePickerProps as MuiStaticDateTimePickerProps,
} from '@mui/x-date-pickers'

export const StaticDateTimePicker: typeof MuiStaticDateTimePicker =
  MuiStaticDateTimePicker

export interface StaticDateTimePickerProps<
  TInputDate = Date,
  TDate = TInputDate,
> extends MuiStaticDateTimePickerProps<TInputDate, TDate> {}

export * from '@mui/x-date-pickers/StaticDateTimePicker'
