import type { MobileTimePickerProps as MuiMobileTimePickerProps } from '@mui/x-date-pickers'
import { MobileTimePicker as MuiMobileTimePicker } from '@mui/x-date-pickers'

/**
 *
 * Demos:
 *
 * - [Time Picker](https://mui.com/x/react-date-pickers/time-picker/)
 *
 * API:
 *
 * - [MobileTimePicker API](https://mui.com/x/api/date-pickers/mobile-time-picker/)
 */
export const MobileTimePicker: typeof MuiMobileTimePicker = MuiMobileTimePicker

export interface MobileTimePickerProps<TDate = Date>
  extends MuiMobileTimePickerProps<TDate> {}

export * from '@mui/x-date-pickers/MobileTimePicker'
