// Edit this file to add new stories
import React from 'react'
import {
  DesktopTimePicker,
  DesktopTimePickerProps,
  TextField,
} from '@monorail/components'

import { story } from '../helpers/storybook'

/**
 * Metadata for DesktopTimePicker stories - update/extend as needed
 */
export default {
  title: 'Inputs/Date and Time/Time/DesktopTimePicker',
  component: DesktopTimePicker,
}

/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<DesktopTimePickerProps<Date>>(
  (args: Partial<DesktopTimePickerProps<Date>>) => {
    const [value, setValue] = React.useState<Date | null>(
      new Date('2018-01-01T00:00:00.000Z'),
    )

    return (
      <DesktopTimePicker
        label="For desktop"
        value={value}
        onChange={newValue => {
          setValue(newValue)
        }}
        renderInput={params => (
          <TextField id="picker" aria-label="time picker" {...params} />
        )}
        {...args}
      />
    )
  },
)

/** Default story for DesktopTimePicker (edit/remove by hand if needed) */
export const Default = story(Template, {
  parameters: {
    docs: {
      description: {
        component: `DesktopTimePicker is a lower-level component which renders a time picker suitable for desktop browsers. This should not likely be used directly.`,
      },
    },
  },
})
