import type { DesktopTimePickerProps as MuiDesktopTimePickerProps } from '@mui/x-date-pickers'
import { DesktopTimePicker as MuiDesktopTimePicker } from '@mui/x-date-pickers'

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

export interface DesktopTimePickerProps<TDate = Date>
  extends MuiDesktopTimePickerProps<TDate> {}

export * from '@mui/x-date-pickers/DesktopTimePicker'
