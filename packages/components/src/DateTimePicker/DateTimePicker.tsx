import type { DateTimePickerProps as MuiDateTimePickerProps } from '@mui/x-date-pickers'
import { DateTimePicker as MuiDateTimePicker } from '@mui/x-date-pickers'

/**
 *
 * Demos:
 *
 * - [Date Time Picker](https://simspace.github.io/monorail/main/storybook/?path=/docs/inputs-date-and-time-date-time-datetimepicker--default)
 * - [Date Time Picker (MUI)](https://mui.com/x/react-date-pickers/date-time-picker/)
 * - [Pickers (MUI)](https://mui.com/x/react-date-pickers/)
 *
 * API:
 *
 * - [DateTimePicker API](https://mui.com/x/api/date-pickers/date-time-picker/)
 */
export const DateTimePicker: typeof MuiDateTimePicker = MuiDateTimePicker

export interface DateTimePickerProps<TDate = Date>
  extends MuiDateTimePickerProps<TDate> {}

export * from '@mui/x-date-pickers/DateTimePicker'
