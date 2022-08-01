import {
  StaticDateRangePicker as MuiStaticDateRangePicker,
  StaticDateRangePickerProps as MuiStaticDateRangePickerProps,
} from '@mui/x-date-pickers-pro'

export const StaticDateRangePicker: typeof MuiStaticDateRangePicker =
  MuiStaticDateRangePicker

export interface StaticDateRangePickerProps<
  TInputDate = Date,
  TDate = TInputDate,
> extends MuiStaticDateRangePickerProps<TInputDate, TDate> {}

export * from '@mui/x-date-pickers-pro/StaticDateRangePicker'
