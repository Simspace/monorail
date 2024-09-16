import React from 'react'
import { Box, Button } from '@mui/material'
import type { DateTimePickerProps as MuiDateTimePickerProps } from '@mui/x-date-pickers'
import { DateTimePicker as MuiDateTimePicker } from '@mui/x-date-pickers'

/**
 *
 * Demos:
 *
 * - [Date Time Picker](https://simspace.gitlab.io/engineering/ux-engineering/monorail/main/storybook/?path=/docs/inputs-date-and-time-date-time-datetimepicker--default)
 * - [Date Time Picker (MUI)](https://mui.com/x/react-date-pickers/date-time-picker/)
 * - [Pickers (MUI)](https://mui.com/x/react-date-pickers/)
 *
 * API:
 *
 * - [DateTimePicker API](https://mui.com/x/api/date-pickers/date-time-picker/)
 */
export const DateTimePicker: typeof MuiDateTimePicker = React.forwardRef(
  (props, ref) => (
    <MuiDateTimePicker
      ref={ref}
      slots={{
        actionBar: props => (
          <Box gridRow={5} gridColumn={'1 / 4'}>
            <Button onClick={props.onSetToday} variant={'text'}>
              Today
            </Button>
          </Box>
        ),
      }}
      {...props}
    />
  ),
)

export interface DateTimePickerProps<TDate = Date>
  extends MuiDateTimePickerProps<TDate> {}

export * from '@mui/x-date-pickers/DateTimePicker'
