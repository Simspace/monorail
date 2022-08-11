import {
  MobileDateTimePicker as MuiMobileDateTimePicker,
  MobileDateTimePickerProps as MuiMobileDateTimePickerProps,
} from '@mui/x-date-pickers'

/**
 *
 * Demos:
 *
 * - [Date Time Picker](https://mui.com/x/react-date-pickers/date-time-picker/)
 *
 * API:
 *
 * - [MobileDateTimePicker API](https://mui.com/x/api/date-pickers/mobile-date-time-picker/)
 */
export const MobileDateTimePicker: typeof MuiMobileDateTimePicker =
  MuiMobileDateTimePicker

export interface MobileDateTimePickerProps<
  TInputDate = Date,
  TDate = TInputDate,
> extends MuiMobileDateTimePickerProps<TInputDate, TDate> {}

export * from '@mui/x-date-pickers/MobileDateTimePicker'
