// Edit this file to add new stories
import React from 'react'

import { DatePickerProps, StaticDatePicker, TextField } from '../../..'
import { story } from '../../../test-helpers/storybook'

export default {
  title: 'Inputs/Date and Time/Date/StaticDatePicker',
  component: StaticDatePicker,
}

const Template = story<DatePickerProps<Date>>(args => {
  const [value, setValue] = React.useState<Date | null>(
    new Date('2021-01-01T12:34:00.000Z'),
  )

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
})

export const Default = story(Template, {
  parameters: {
    docs: {
      description: {
        component: `It's possible to render any date picker without the modal/popover and text field. This can be helpful when building custom popover/modal containers.`,
      },
    },
  },
})
