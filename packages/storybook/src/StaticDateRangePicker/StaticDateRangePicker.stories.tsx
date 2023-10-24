// Edit this file to add new stories
import React from 'react'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'

import type {
  DateRange,
  StaticDateRangePickerProps,
} from '@monorail/components'
import {
  LocalizationProvider,
  StaticDateRangePicker,
} from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default {
  title: 'Inputs/Date and Time/Date Range/StaticDateRangePicker',
}

const Template = story<StaticDateRangePickerProps<Date>>(args => {
  const [value, setValue] = React.useState<DateRange<Date>>([
    new Date('2021-01-01T12:34:00.000Z'),
    new Date('2021-01-03T12:34:00.000Z'),
  ])

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StaticDateRangePicker
        displayStaticWrapperAs="desktop"
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
 * It's possible to render any picker inline. This will enable building custom popover/modal containers.
 */
export const Default = story(Template)
