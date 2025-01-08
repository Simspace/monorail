// Edit this file to add new stories
import React from 'react'

import type { DesktopTimePickerProps } from '@monorail/components'
import { DesktopTimePicker } from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default {
  title: 'Inputs/Date and Time/Time/DesktopTimePicker',
  component: DesktopTimePicker,
}

const Template = story<DesktopTimePickerProps<Date>>(
  (args: Partial<DesktopTimePickerProps<Date>>) => {
    const [value, setValue] = React.useState<Date | null>(new Date('2018-01-01T00:00:00.000Z'))

    return (
      <DesktopTimePicker
        label='For desktop'
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
 * `DesktopTimePicker` is a lower-level component which renders a time picker suitable for desktop browsers. This should not likely be used directly.
 */
export const Default = story(Template)
