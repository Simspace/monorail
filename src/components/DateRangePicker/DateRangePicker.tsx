import {
  DateRangePicker as MuiDateRangePicker,
  DateRangePickerProps as MuiDateRangePickerProps,
} from '@mui/x-date-pickers-pro'

export const DateRangePicker: typeof MuiDateRangePicker = MuiDateRangePicker

export interface DateRangePickerProps<TInputDate = Date, TDate = TInputDate>
  extends MuiDateRangePickerProps<TInputDate, TDate> {}

export * from '@mui/x-date-pickers-pro/DateRangePicker'
