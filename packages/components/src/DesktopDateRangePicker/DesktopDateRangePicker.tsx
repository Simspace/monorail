import type { DesktopDateRangePickerProps as MuiDesktopDateRangePickerProps } from '@mui/x-date-pickers-pro'
import { DesktopDateRangePicker as MuiDesktopDateRangePicker } from '@mui/x-date-pickers-pro'

/**
 *
 * Demos:
 *
 * - [Date Range Picker](https://mui.com/x/react-date-pickers/date-range-picker/)
 *
 * API:
 *
 * - [DesktopDateRangePicker API](https://mui.com/x/api/date-pickers/desktop-date-range-picker/)
 */
export const DesktopDateRangePicker: typeof MuiDesktopDateRangePicker =
  MuiDesktopDateRangePicker

export interface DesktopDateRangePickerProps<TDate = Date>
  extends MuiDesktopDateRangePickerProps<TDate> {}

export * from '@mui/x-date-pickers-pro/DesktopDateRangePicker'
