// Edit this file to add new stories
import React from 'react'
import { StaticDatePicker, StaticDatePickerProps } from '../StaticDatePicker'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './StaticDatePicker.stories.gen'
import { action } from '@storybook/addon-actions'
import { TextField } from '../../TextField/TextField'
import { DatePickerProps } from '../../DatePicker/DatePicker'

export default {
  ...defaultStoryMeta,
  title: 'Inputs/Date and Time/Date/StaticDatePicker',
}

const Template = story<DatePickerProps<Date>>(args => {
  const [value, setValue] = React.useState<Date | null>(new Date())

  return (
    <StaticDatePicker
      displayStaticWrapperAs="desktop"
      openTo="year"
      value={value}
      onChange={newValue => {
        setValue(newValue)
      }}
      renderInput={params => <TextField {...params} />}
      {...args}
    />
  )
}, {})

export const Default = story(Template, {
  parameters: {
    docs: {
      description: {
        component: `It's possible to render any date picker without the modal/popover and text field. This can be helpful when building custom popover/modal containers.`,
      },
    },
  },
})
