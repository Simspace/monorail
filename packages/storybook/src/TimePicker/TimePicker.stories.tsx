// Edit this file to add new stories
import React from 'react'

import type { TimePickerProps } from '@monorail/components'
import { Box, TextField, TimePicker } from '@monorail/components'

import { story } from '../helpers/storybook.js'
/**
 * Metadata for TimePicker stories - update/extend as needed
 */
export default {
  title: 'Inputs/Date and Time/Time/TimePicker',
  component: TimePicker,
}

/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
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

/** Default story for TimePicker (edit/remove by hand if needed) */
export const Default = story(Template, {
  parameters: {
    docs: {
      description: {
        component: `TimePicker is a control for choosing a time. The time picker is rendered as a modal dialog on mobile, and a textbox with a popup on desktop.`,
      },
    },
  },
})

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
