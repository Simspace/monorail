import {
  MobileDateRangePicker as MuiMobileDateRangePicker,
  MobileDateRangePickerProps as MuiMobileDateRangePickerProps,
} from '@mui/x-date-pickers-pro'

export const MobileDateRangePicker: typeof MuiMobileDateRangePicker =
  MuiMobileDateRangePicker

export interface MobileDateRangePickerProps<
  TInputDate = Date,
  TDate = TInputDate,
> extends MuiMobileDateRangePickerProps<TInputDate, TDate> {}

export * from '@mui/x-date-pickers-pro/MobileDateRangePicker'
