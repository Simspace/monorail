import type { StaticDateRangePickerProps as MuiStaticDateRangePickerProps } from '@mui/x-date-pickers-pro'
import { StaticDateRangePicker as MuiStaticDateRangePicker } from '@mui/x-date-pickers-pro'

/**
 *
 * Demos:
 *
 * - [Date Range Picker](https://mui.com/x/react-date-pickers/date-range-picker/)
 *
 * API:
 *
 * - [StaticDateRangePicker API](https://mui.com/x/api/date-pickers/static-date-range-picker/)
 */
export const StaticDateRangePicker: typeof MuiStaticDateRangePicker =
  MuiStaticDateRangePicker

export interface StaticDateRangePickerProps<TDate = Date>
  extends MuiStaticDateRangePickerProps<TDate> {}

export * from '@mui/x-date-pickers-pro/StaticDateRangePicker'
