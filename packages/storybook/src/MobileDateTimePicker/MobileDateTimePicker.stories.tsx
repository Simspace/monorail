// Edit this file to add new stories
import React from 'react'

import type { MobileDateTimePickerProps } from '@monorail/components'
import { MobileDateTimePicker } from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default {
  title: 'Inputs/Date and Time/Date Time/MobileDateTimePicker',
  component: MobileDateTimePicker,
}

const Template = story<MobileDateTimePickerProps<Date>>(args => {
  const [value, setValue] = React.useState<Date | null>(
    new Date('2018-01-01T00:00:00.000Z'),
  )

  return (
    <MobileDateTimePicker
      value={value}
      onChange={newValue => {
        setValue(newValue)
      }}
      {...args}
    />
  )
})

/**
 * `MobileDateTimePicker` renders a date/time picker suitable for mobile browsers. This should not likely be used directly.
 */
export const Default = story(Template)
