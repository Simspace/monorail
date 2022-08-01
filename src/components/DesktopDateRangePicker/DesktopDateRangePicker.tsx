import {
  DesktopDateRangePicker as MuiDesktopDateRangePicker,
  DesktopDateRangePickerProps as MuiDesktopDateRangePickerProps,
} from '@mui/x-date-pickers-pro'

export const DesktopDateRangePicker: typeof MuiDesktopDateRangePicker =
  MuiDesktopDateRangePicker

export interface DesktopDateRangePickerProps<
  TInputDate = Date,
  TDate = TInputDate,
> extends MuiDesktopDateRangePickerProps<TInputDate, TDate> {}

export * from '@mui/x-date-pickers-pro/DesktopDateRangePicker'
