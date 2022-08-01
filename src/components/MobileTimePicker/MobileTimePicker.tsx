import {
  MobileTimePicker as MuiMobileTimePicker,
  MobileTimePickerProps as MuiMobileTimePickerProps,
} from '@mui/x-date-pickers'

export const MobileTimePicker: typeof MuiMobileTimePicker = MuiMobileTimePicker

export interface MobileTimePickerProps<TInputDate = Date, TDate = TInputDate>
  extends MuiMobileTimePickerProps<TInputDate, TDate> {}

export * from '@mui/x-date-pickers/MobileTimePicker'
