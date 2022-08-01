import {
  DesktopDateTimePicker as MuiDesktopDateTimePicker,
  DesktopDateTimePickerProps as MuiDesktopDateTimePickerProps,
} from '@mui/x-date-pickers'

export const DesktopDateTimePicker: typeof MuiDesktopDateTimePicker =
  MuiDesktopDateTimePicker

export interface DesktopDateTimePickerProps<
  TInputDate = Date,
  TDate = TInputDate,
> extends MuiDesktopDateTimePickerProps<TInputDate, TDate> {}

export * from '@mui/x-date-pickers/DesktopDateTimePicker'
