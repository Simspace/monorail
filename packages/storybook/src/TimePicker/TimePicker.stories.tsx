// Edit this file to add new stories
import React from 'react'

import type { TimePickerProps } from '@monorail/components'
import { Box, TextField, TimePicker } from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default {
  title: 'Inputs/Date and Time/Time/TimePicker',
  component: TimePicker,
}

const Template = story<TimePickerProps<Date>>(args => {
  const [value, setValue] = React.useState<Date | null>(null)

  return (
    <TimePicker
      label="Basic example"
      value={value}
      onChange={newValue => {
        setValue(newValue)
      }}
      {...args}
    />
  )
})

/**
 * `TimePicker` is a control for choosing a time. The time picker is rendered as a modal dialog on mobile, and a textbox with a popup on desktop.
 */
export const Default = story(Template)

export const NativeTimePicker = story<TimePickerProps>(() => {
  return (
    <Box component="form" noValidate>
      <TextField
        id="time"
        label="Alarm clock"
        type="time"
        defaultValue="07:30"
        inputProps={{
          step: 300, // 5 min
        }}
        sx={{ width: 150 }}
      />
    </Box>
  )
})
