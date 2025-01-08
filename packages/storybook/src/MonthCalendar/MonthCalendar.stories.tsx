// Edit this file to add new stories
import React from 'react'

import type { MonthCalendarProps } from '@monorail/components'
import { MonthCalendar } from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default {
  title: 'Inputs/Date and Time/Date/MonthCalendar',
  component: MonthCalendar,
}

const Template = story<MonthCalendarProps<Date>>(
  (args) => {
    const minDate = new Date('2020-01-01T00:00:00.000')
    const maxDate = new Date('2034-01-01T00:00:00.000')

    const [date, setDate] = React.useState<Date | null>(new Date('2021-01-01T12:34:00.000Z'))

    return (
      <MonthCalendar
        value={date}
        minDate={minDate}
        maxDate={maxDate}
        onChange={(newDate) => setDate(newDate)}
        {...args}
      />
    )
  },
  {
    muiName: 'MuiMonthCalendar',
  },
)

/**
 * `MonthCalendar` is a low-level component used for selecting a month.
 */
export const Default = story(Template)
