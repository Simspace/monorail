import type { DesktopDatePickerProps as MuiDesktopDatePickerProps } from '@mui/x-date-pickers'
import { DesktopDatePicker as MuiDesktopDatePicker } from '@mui/x-date-pickers'

/**
 *
 * Demos:
 *
 * - [Date Picker](https://mui.com/x/react-date-pickers/date-picker/)
 *
 * API:
 *
 * - [DesktopDatePicker API](https://mui.com/x/api/date-pickers/desktop-date-picker/)
 */
export const DesktopDatePicker: typeof MuiDesktopDatePicker =
  MuiDesktopDatePicker

export interface DesktopDatePickerProps<TInputDate = Date, TDate = TInputDate>
  extends MuiDesktopDatePickerProps<TInputDate, TDate> {}

export * from '@mui/x-date-pickers/DesktopDatePicker'
