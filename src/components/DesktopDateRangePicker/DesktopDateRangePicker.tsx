import {
  DesktopDateRangePicker as MuiDesktopDateRangePicker,
  DesktopDateRangePickerProps as MuiDesktopDateRangePickerProps,
} from '@mui/x-date-pickers-pro'

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

export interface DesktopDateRangePickerProps<
  TInputDate = Date,
  TDate = TInputDate,
> extends MuiDesktopDateRangePickerProps<TInputDate, TDate> {}

export * from '@mui/x-date-pickers-pro/DesktopDateRangePicker'
