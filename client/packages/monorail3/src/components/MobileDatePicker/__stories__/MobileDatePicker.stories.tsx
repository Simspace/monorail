// Edit this file to add new stories
import React from 'react'
import { MobileDatePicker, MobileDatePickerProps } from '../MobileDatePicker'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './MobileDatePicker.stories.gen'
import { action } from '@storybook/addon-actions'
import { TextField } from '../../TextField/TextField'

export default {
  ...defaultStoryMeta,
  title: 'Inputs/Date and Time/Date/MobileDatePicker',
}

const Template = story<MobileDatePickerProps<Date>>(args => {
  const [value, setValue] = React.useState<Date | null>(new Date())

  return (
    <MobileDatePicker
      value={value}
      renderInput={params => <TextField {...params} />}
      onChange={newValue => {
        setValue(newValue)
        action('onChange')
      }}
      {...args}
    />
  )
})

export const Default = story(Template, {
  parameters: {
    docs: {
      description: {
        component: `MobileDatePicker is used when the user is in a mobile browser, based on a media-query check. This component should not likely be used directly.`,
      },
    },
  },
})
