// Edit this file to add new stories
import React from 'react'
import { CalendarPicker, CalendarPickerProps } from '@monorail/components'
import { action } from '@storybook/addon-actions'

import { story } from '../helpers/storybook'
/**
 * Metadata for CalendarPicker stories - update/extend as needed
 */
export default {
  title: 'Inputs/Date and Time/Date/CalendarPicker',
  // TODO: CalendarPickerPropsWithClasses not exported
  // component: CalendarPicker,
}

/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<CalendarPickerProps<Date>>(
  args => {
    const [date, setDate] = React.useState<Date | null>(
      new Date('2021-01-01T12:34:00.000Z'),
    )

    return (
      <CalendarPicker
        date={date}
        onChange={newDate => {
          setDate(newDate)
          action('onChange')
        }}
        {...args}
      />
    )
  },
  {
    muiName: 'MuiCalendarPicker',
  },
)

/** Default story for CalendarPicker (edit/remove by hand if needed) */
export const Default = story(Template, {
  parameters: {
    docs: {
      description: {
        component: `CalendarPicker is a lower-level component for selecting a specific day on a calendar.`,
      },
    },
  },
})
