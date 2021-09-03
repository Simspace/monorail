// Edit this file to add new stories
import React from 'react'
import { DesktopDatePicker, DesktopDatePickerProps } from '../DesktopDatePicker'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './DesktopDatePicker.stories.gen'
import { action } from '@storybook/addon-actions'
import { TextField } from '../../TextField/TextField'

export default {
  ...defaultStoryMeta,
  title: 'Inputs/Date and Time/Date/DesktopDatePicker',
}

const Template = story<DesktopDatePickerProps<Date>>(args => {
  const [value, setValue] = React.useState<Date | null>(new Date())

  return (
    <DesktopDatePicker
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
        component: `DesktopDatePicker is used when the user is in a desktop browser, based on a media-query check. This component should not likely be used directly.`,
      },
    },
  },
})
