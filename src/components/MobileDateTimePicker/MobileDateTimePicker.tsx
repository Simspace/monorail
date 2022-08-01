import {
  MobileDateTimePicker as MuiMobileDateTimePicker,
  MobileDateTimePickerProps as MuiMobileDateTimePickerProps,
} from '@mui/x-date-pickers'

export const MobileDateTimePicker: typeof MuiMobileDateTimePicker =
  MuiMobileDateTimePicker

export interface MobileDateTimePickerProps<
  TInputDate = Date,
  TDate = TInputDate,
> extends MuiMobileDateTimePickerProps<TInputDate, TDate> {}

export * from '@mui/x-date-pickers/MobileDateTimePicker'
