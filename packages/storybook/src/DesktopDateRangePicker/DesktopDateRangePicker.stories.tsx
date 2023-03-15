// Edit this file to add new stories
import React from 'react'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'

import type {
  DateRange,
  DesktopDateRangePickerProps,
} from '@monorail/components'
import {
  DesktopDateRangePicker,
  LocalizationProvider,
} from '@monorail/components'

import { story } from '../helpers/storybook.js'

/**
 * Metadata for DesktopDateRangePicker stories - update/extend as needed
 */
export default {
  title: 'Inputs/Date and Time/Date Range/DesktopDateRangePicker',
  component: DesktopDateRangePicker,
}

const Template = story<DesktopDateRangePickerProps<Date>>(
  (args: Partial<DesktopDateRangePickerProps<Date>>) => {
    const [value, setValue] = React.useState<DateRange<Date>>([null, null])

    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDateRangePicker
          value={value}
          onChange={newValue => {
            setValue(newValue)
          }}
          {...args}
        />
      </LocalizationProvider>
    )
  },
)

/** Default story for DesktopDateRangePicker (edit/remove by hand if needed) */
export const Default = story(Template, {
  parameters: {
    docs: {
      description: {
        component: `DesktopDateRangePicker is for picking a date range on a desktop browser. This should not likely be used directly.`,
      },
    },
  },
})
