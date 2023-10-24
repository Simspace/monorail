// Edit this file to add new stories
import React from 'react'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'

import type {
  DateRange,
  MobileDateRangePickerProps,
} from '@monorail/components'
import {
  LocalizationProvider,
  MobileDateRangePicker,
} from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default {
  title: 'Inputs/Date and Time/Date Range/MobileDateRangePicker',
  // TODO: This component type is non-standard and not compatible with the expected types
  //component: MobileDateRangePicker,
}

const Template = story<MobileDateRangePickerProps<Date>>(args => {
  const [value, setValue] = React.useState<DateRange<Date>>([null, null])

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MobileDateRangePicker
        aria-label="Mobile Date Range Picker"
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
 * `MobileDateRangePicker` is for picking a date range on mobile. This should not likely be used directly.
 */
export const Default = story(Template)
