// Edit this file to add new stories
import React from 'react'

import type { ClockPickerProps } from '@monorail/components'
import { ClockPicker, Stack, Typography } from '@monorail/components'

import { story } from '../helpers/storybook.js'

/**
 * Metadata for ClockPicker stories - update/extend as needed
 */
export default {
  title: 'Inputs/Date and Time/Time/ClockPicker',
  component: ClockPicker,
}

/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<ClockPickerProps<Date>>(
  args => {
    const [date, setDate] = React.useState<Date>(
      new Date('2021-01-01T12:34:00.000Z'),
    )

    return (
      <Stack spacing={2} direction={'row'}>
        <Typography>{`${date.getHours()}:${date.getMinutes()}`}</Typography>
        <ClockPicker
          date={date}
          onChange={newDate => newDate !== null && setDate(newDate)}
          {...args}
        />
      </Stack>
    )
  },
  { muiName: 'MuiClockPicker' },
)

/** Default story for ClockPicker (edit/remove by hand if needed) */
export const Default = story(Template, {
  parameters: {
    docs: {
      description: {
        component: `ClockPicker is a lower-level sub-component which can be used for building more custom time pickers.`,
      },
    },
  },
})
