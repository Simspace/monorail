import type { DateRangePickerProps as MuiDateRangePickerProps } from '@mui/x-date-pickers-pro'
import { DateRangePicker as MuiDateRangePicker } from '@mui/x-date-pickers-pro'

/**
 *
 * Demos:
 *
 * - [Date Range Picker](https://simspace.gitlab.io/engineering/ux-engineering/monorail/main/storybook/?path=/docs/inputs-date-and-time-date-range-daterangepicker--default)
 * - [Date Range Picker (MUI)](https://mui.com/x/react-date-pickers/date-range-picker/)
 *
 * API:
 *
 * - [DateRangePicker API](https://mui.com/x/api/date-pickers/date-range-picker/)
 */
export const DateRangePicker: typeof MuiDateRangePicker = MuiDateRangePicker

export interface DateRangePickerProps<TInputDate = Date, TDate = TInputDate>
  extends MuiDateRangePickerProps<TInputDate, TDate> {}

export * from '@mui/x-date-pickers-pro/DateRangePicker'
