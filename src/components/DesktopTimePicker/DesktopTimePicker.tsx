import {
  DesktopTimePicker as MuiDesktopTimePicker,
  DesktopTimePickerProps as MuiDesktopTimePickerProps,
} from '@mui/x-date-pickers'

export const DesktopTimePicker: typeof MuiDesktopTimePicker =
  MuiDesktopTimePicker

export interface DesktopTimePickerProps<TInputDate = Date, TDate = TInputDate>
  extends MuiDesktopTimePickerProps<TInputDate, TDate> {}

export * from '@mui/x-date-pickers/DesktopTimePicker'
