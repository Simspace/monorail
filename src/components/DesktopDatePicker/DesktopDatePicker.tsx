import {
  DesktopDatePicker as MuiDesktopDatePicker,
  DesktopDatePickerProps as MuiDesktopDatePickerProps,
} from '@mui/x-date-pickers'

export const DesktopDatePicker: typeof MuiDesktopDatePicker =
  MuiDesktopDatePicker

export interface DesktopDatePickerProps<TInputDate = Date, TDate = TInputDate>
  extends MuiDesktopDatePickerProps<TInputDate, TDate> {}

export * from '@mui/x-date-pickers/DesktopDatePicker'
