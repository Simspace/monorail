// Edit this file to add new stories
import React from 'react'

import { story } from '../../../__tests__/helpers/storybook'
import { TextField } from '../../TextField/TextField'
import { MobileTimePicker, MobileTimePickerProps } from '../MobileTimePicker'
import { defaultStoryMeta } from './MobileTimePicker.stories.gen'

export default {
  ...defaultStoryMeta,
  title: 'Inputs/Date and Time/Time/MobileTimePicker',
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
