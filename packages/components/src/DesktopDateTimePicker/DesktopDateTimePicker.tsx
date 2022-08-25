import type { DesktopDateTimePickerProps as MuiDesktopDateTimePickerProps } from '@mui/x-date-pickers'
import { DesktopDateTimePicker as MuiDesktopDateTimePicker } from '@mui/x-date-pickers'

/**
 *
 * Demos:
 *
 * - [Date Time Picker](https://mui.com/x/react-date-pickers/date-time-picker/)
 *
 * API:
 *
 * - [DesktopDateTimePicker API](https://mui.com/x/api/date-pickers/desktop-date-time-picker/)
 */
export const DesktopDateTimePicker: typeof MuiDesktopDateTimePicker =
  MuiDesktopDateTimePicker

export interface DesktopDateTimePickerProps<
  TInputDate = Date,
  TDate = TInputDate,
> extends MuiDesktopDateTimePickerProps<TInputDate, TDate> {}

export * from '@mui/x-date-pickers/DesktopDateTimePicker'
