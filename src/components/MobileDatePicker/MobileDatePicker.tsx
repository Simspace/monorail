import {
  MobileDatePicker as MuiMobileDatePicker,
  MobileDatePickerProps as MuiMobileDatePickerProps,
} from '@mui/x-date-pickers'

export const MobileDatePicker: typeof MuiMobileDatePicker = MuiMobileDatePicker

export interface MobileDatePickerProps<TInputDate = Date, TDate = TInputDate>
  extends MuiMobileDatePickerProps<TInputDate, TDate> {}

export * from '@mui/x-date-pickers/MobileDatePicker'
