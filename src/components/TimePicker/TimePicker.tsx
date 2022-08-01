import {
  TimePicker as MuiTimePicker,
  TimePickerProps as MuiTimePickerProps,
} from '@mui/x-date-pickers'

export const TimePicker: typeof MuiTimePicker = MuiTimePicker

export interface TimePickerProps<TInputDate = Date, TDate = TInputDate>
  extends MuiTimePickerProps<TInputDate, TDate> {}

export * from '@mui/x-date-pickers/TimePicker'
