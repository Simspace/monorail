import type { TimePickerProps as MuiTimePickerProps } from '@mui/x-date-pickers'
import { TimePicker as MuiTimePicker } from '@mui/x-date-pickers'

/**
 *
 * Demos:
 *
 * - [Time Picker](https://simspace.gitlab.io/engineering/ux-engineering/monorail/main/storybook/?path=/docs/inputs-date-and-time-time-timepicker--default)
 * - [Pickers (MUI)](https://mui.com/x/react-date-pickers/)
 * - [Time Picker (MUI)](https://mui.com/x/react-date-pickers/time-picker/)
 *
 * API:
 *
 * - [TimePicker API](https://mui.com/x/api/date-pickers/time-picker/)
 */
export const TimePicker: typeof MuiTimePicker = MuiTimePicker

export interface TimePickerProps<TDate = Date>
  extends MuiTimePickerProps<TDate> {}

export * from '@mui/x-date-pickers/TimePicker'
