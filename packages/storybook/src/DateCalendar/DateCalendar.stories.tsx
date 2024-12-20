// Edit this file to add new stories
import React from 'react'
import { action } from '@storybook/addon-actions'

import type { DateCalendarProps } from '@monorail/components'
import { DateCalendar } from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default {
  title: 'Inputs/Date and Time/Date/DateCalendar',
  component: DateCalendar,
}

const Template = story<DateCalendarProps<Date>>(
  (args) => {
    const [date, setDate] = React.useState<Date | null>(new Date('2021-01-01T12:34:00.000Z'))

    return (
      <DateCalendar
        value={date}
        onChange={(newDate) => {
          setDate(newDate)
          action('onChange')
        }}
        {...args}
      />
    )
  },
  {
    muiName: 'MuiDateCalendar',
  },
)

/**
 * `CalendarPicker` is a lower-level component for selecting a specific day on a calendar.
 */
export const Default = story(Template)
