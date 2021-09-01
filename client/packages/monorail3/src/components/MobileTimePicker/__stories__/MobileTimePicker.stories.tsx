// Edit this file to add new stories
import React from 'react'
import { MobileTimePicker, MobileTimePickerProps } from '../MobileTimePicker'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './MobileTimePicker.stories.gen'
import { TextField } from '../../TextField/TextField'

export default {
  ...defaultStoryMeta,
  title: 'Inputs/Date and Time/Time/MobileTimePicker',
}

const Template = story<MobileTimePickerProps>(
  args => {
    const [value, setValue] = React.useState<Date | null>(
      new Date('2018-01-01T00:00:00.000Z'),
    )

    return (
      <MobileTimePicker
        label="For mobile"
        value={value}
        onChange={newValue => {
          setValue(newValue)
        }}
        renderInput={params => <TextField {...params} />}
      />
    )
  },
  { args: {} },
)

export const Default = story(Template, {
  parameters: {
    docs: {
      description: {
        component: `MobileTimePicker is a lower-level component that renders a time picker for a mobile browser. This should not likely be used directly`,
      },
    },
  },
})
