import {
  DesktopTimePicker as MuiDesktopTimePicker,
  DesktopTimePickerProps as MuiDesktopTimePickerProps,
} from '@mui/x-date-pickers'

/**
 *
 * Demos:
 *
 * - [Time Picker](https://mui.com/x/react-date-pickers/time-picker/)
 *
 * API:
 *
 * - [DesktopTimePicker API](https://mui.com/x/api/date-pickers/desktop-time-picker/)
 */
export const DesktopTimePicker: typeof MuiDesktopTimePicker =
  MuiDesktopTimePicker

export interface DesktopTimePickerProps<TInputDate = Date, TDate = TInputDate>
  extends MuiDesktopTimePickerProps<TInputDate, TDate> {}

export * from '@mui/x-date-pickers/DesktopTimePicker'
