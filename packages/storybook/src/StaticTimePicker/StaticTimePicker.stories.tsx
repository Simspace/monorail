// Edit this file to add new stories
import React from 'react'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'

import type { StaticTimePickerProps } from '@monorail/components'
import { LocalizationProvider, StaticTimePicker } from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default {
  title: 'Inputs/Date and Time/Time/StaticTimePicker',
  component: StaticTimePicker,
}

const Template = story<StaticTimePickerProps<Date>>(args => {
  const [value, setValue] = React.useState<Date | null>(
    new Date('2021-01-01T12:34:00.000Z'),
  )

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StaticTimePicker
        displayStaticWrapperAs="mobile"
        value={value}
        onChange={newValue => {
          setValue(newValue)
        }}
        {...args}
      />
    </LocalizationProvider>
  )
})

/**
 * It's possible to render any time picker inline. This will enable building custom popover/modal containers.
 */
export const Default = story(Template)
