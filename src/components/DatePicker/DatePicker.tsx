import {
  DatePicker as MuiDatePicker,
  DatePickerProps as MuiDatePickerProps,
} from '@mui/x-date-pickers'

export const DatePicker: typeof MuiDatePicker = MuiDatePicker

export interface DatePickerProps<TInputDate = Date, TDate = TInputDate>
  extends MuiDatePickerProps<TInputDate, TDate> {}

export * from '@mui/x-date-pickers/DatePicker'
