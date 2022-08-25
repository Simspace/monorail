import type { MobileDatePickerProps as MuiMobileDatePickerProps } from '@mui/x-date-pickers'
import { MobileDatePicker as MuiMobileDatePicker } from '@mui/x-date-pickers'

/**
 *
 * Demos:
 *
 * - [Date Picker](https://mui.com/x/react-date-pickers/date-picker/)
 *
 * API:
 *
 * - [MobileDatePicker API](https://mui.com/x/api/date-pickers/mobile-date-picker/)
 */
export const MobileDatePicker: typeof MuiMobileDatePicker = MuiMobileDatePicker

export interface MobileDatePickerProps<TInputDate = Date, TDate = TInputDate>
  extends MuiMobileDatePickerProps<TInputDate, TDate> {}

export * from '@mui/x-date-pickers/MobileDatePicker'
