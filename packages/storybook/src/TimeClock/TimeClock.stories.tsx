// Edit this file to add new stories
import React from 'react'

import type { TimeClockProps } from '@monorail/components'
import { Stack, TimeClock, Typography } from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default {
  title: 'Inputs/Date and Time/Time/TimeClock',
  component: TimeClock,
}

const Template = story<TimeClockProps<Date>>(
  (args) => {
    const [date, setDate] = React.useState<Date>(new Date('2021-01-01T12:34:00.000Z'))

    return (
      <Stack spacing={2} direction={'row'}>
        <Typography>{`${date.getHours()}:${date.getMinutes()}`}</Typography>
        <TimeClock
          value={date}
          onChange={(newDate) => newDate !== null && setDate(newDate)}
          {...args}
        />
      </Stack>
    )
  },
  { muiName: 'MuiTimeClock' },
)

/**
 * `ClockPicker` is a lower-level sub-component which can be used for building more custom time pickers.
 */
export const Default = story(Template)
