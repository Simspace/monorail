import {
  DateTimePicker as MuiDateTimePicker,
  DateTimePickerProps as MuiDateTimePickerProps,
} from '@mui/x-date-pickers'

export const DateTimePicker: typeof MuiDateTimePicker = MuiDateTimePicker

export interface DateTimePickerProps<TInputDate = Date, TDate = TInputDate>
  extends MuiDateTimePickerProps<TInputDate, TDate> {}

export * from '@mui/x-date-pickers/DateTimePicker'
