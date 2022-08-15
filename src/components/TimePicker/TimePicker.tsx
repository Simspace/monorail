import {
  TimePicker as MuiTimePicker,
  TimePickerProps as MuiTimePickerProps,
} from '@mui/x-date-pickers'

/**
 *
 * Demos:
 *
 * - [Pickers](https://mui.com/x/react-date-pickers/)
 * - [Time Picker](https://mui.com/x/react-date-pickers/time-picker/)
 *
 * API:
 *
 * - [TimePicker API](https://mui.com/x/api/date-pickers/time-picker/)
 */
export const TimePicker: typeof MuiTimePicker = MuiTimePicker

export interface TimePickerProps<TInputDate = Date, TDate = TInputDate>
  extends MuiTimePickerProps<TInputDate, TDate> {}

export * from '@mui/x-date-pickers/TimePicker'
