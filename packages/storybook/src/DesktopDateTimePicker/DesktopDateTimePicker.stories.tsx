// Edit this file to add new stories
import React from 'react'

import type { DesktopDateTimePickerProps } from '@monorail/components'
import { DesktopDateTimePicker } from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default {
  title: 'Inputs/Date and Time/Date Time/DesktopDateTimePicker',
  component: DesktopDateTimePicker,
}

const Template = story<DesktopDateTimePickerProps<Date>>(
  (args: Partial<DesktopDateTimePickerProps<Date>>) => {
    const [value, setValue] = React.useState<Date | null>(new Date('2018-01-01T00:00:00.000Z'))

    return (
      <DesktopDateTimePicker
        label='Date/Time'
        aria-label='Date/Time'
        value={value}
        onChange={(newValue) => {
          setValue(newValue)
        }}
        {...args}
      />
    )
  },
)

/**
 * `DesktopDateTimePicker` renders a date/time picker suitable for desktop browsers. This should not likely be used directly.
 */
export const Default = story(Template)
