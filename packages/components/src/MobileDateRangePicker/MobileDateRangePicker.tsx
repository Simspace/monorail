import type { MobileDateRangePickerProps as MuiMobileDateRangePickerProps } from '@mui/x-date-pickers-pro'
import { MobileDateRangePicker as MuiMobileDateRangePicker } from '@mui/x-date-pickers-pro'

/**
 *
 * Demos:
 *
 * - [Date Range Picker](https://mui.com/x/react-date-pickers/date-range-picker/)
 *
 * API:
 *
 * - [MobileDateRangePicker API](https://mui.com/x/api/date-pickers/mobile-date-range-picker/)
 */
export const MobileDateRangePicker: typeof MuiMobileDateRangePicker =
  MuiMobileDateRangePicker

export interface MobileDateRangePickerProps<
  TInputDate = Date,
  TDate = TInputDate,
> extends MuiMobileDateRangePickerProps<TInputDate, TDate> {}

export * from '@mui/x-date-pickers-pro/MobileDateRangePicker'
