// Edit this file to add new stories
import React from 'react'

import type { MobileTimePickerProps } from '@monorail/components'
import { MobileTimePicker, TextField } from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default {
  title: 'Inputs/Date and Time/Time/MobileTimePicker',
  component: MobileTimePicker,
}

const Template = story<MobileTimePickerProps>(args => {
  const [value, setValue] = React.useState<Date | null>(
    new Date('2018-01-01T00:00:00.000Z'),
  )

  return (
    <MobileTimePicker
      label="For mobile"
      value={value}
      onChange={newValue => {
        setValue(newValue as Date)
      }}
      renderInput={params => <TextField {...params} />}
      {...args}
    />
  )
})

export const Default = story(Template, {
  parameters: {
    docs: {
      description: {
        component: `MobileTimePicker is a lower-level component that renders a time picker for a mobile browser. This should not likely be used directly`,
      },
    },
  },
})
