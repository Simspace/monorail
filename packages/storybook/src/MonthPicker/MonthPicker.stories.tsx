// Edit this file to add new stories
import React from 'react'

import type { MonthPickerProps } from '@monorail/components'
import { MonthPicker } from '@monorail/components'

import { story } from '../helpers/storybook.js'
/**
 * Metadata for MonthPicker stories - update/extend as needed
 */
export default {
  title: 'Inputs/Date and Time/Date/MonthPicker',
  component: MonthPicker,
}

/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<MonthPickerProps<Date>>(
  args => {
    const minDate = new Date('2020-01-01T00:00:00.000')
    const maxDate = new Date('2034-01-01T00:00:00.000')

    const [date, setDate] = React.useState<Date | null>(
      new Date('2021-01-01T12:34:00.000Z'),
    )

    return (
      <MonthPicker
        date={date}
        minDate={minDate}
        maxDate={maxDate}
        onChange={newDate => setDate(newDate)}
        {...args}
      />
    )
  },
  {
    muiName: 'MuiMonthPicker',
  },
)

/** Default story for MonthPicker (edit/remove by hand if needed) */
export const Default = story(Template, {
  parameters: {
    docs: {
      description: {
        component: `MonthPicker is a low-level component used for selecting a month.`,
      },
    },
  },
})
