// Edit this file to add new stories
import React from 'react'
import { MobileTimePicker, MobileTimePickerProps } from '@mui/lab'
import { TextField } from '@mui/material'

import { story } from '../../../__tests__/helpers/storybook'

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
