// Edit this file to add new stories
import React from 'react'
import {
  DesktopDateTimePicker,
  DesktopDateTimePickerProps,
  TextField,
} from '@monorail/components'

import { story } from '../helpers/storybook.js'

/**
 * Metadata for DesktopDateTimePicker stories - update/extend as needed
 */
export default {
  title: 'Inputs/Date and Time/Date Time/DesktopDateTimePicker',
  component: DesktopDateTimePicker,
}

/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<DesktopDateTimePickerProps<Date>>(
  (args: Partial<DesktopDateTimePickerProps<Date>>) => {
    const [value, setValue] = React.useState<Date | null>(
      new Date('2018-01-01T00:00:00.000Z'),
    )

    return (
      <DesktopDateTimePicker
        label="Date/Time"
        aria-label="Date/Time"
        value={value}
        onChange={newValue => {
          setValue(newValue)
        }}
        renderInput={params => (
          <TextField
            id="dtpicker input"
            inputProps={{ 'aria-label': 'dtpicker' }}
            {...params}
          />
        )}
        {...args}
      />
    )
  },
)

/** Default story for DesktopDateTimePicker (edit/remove by hand if needed) */
export const Default = story(Template, {
  parameters: {
    docs: {
      description: {
        component: `DesktopDateTimePicker renders a date/time picker suitable for desktop browsers. This should not likely be used directly.`,
      },
    },
  },
})
