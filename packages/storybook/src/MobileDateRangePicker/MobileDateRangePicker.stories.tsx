// Edit this file to add new stories
import React from 'react'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'

import type {
  DateRange,
  MobileDateRangePickerProps,
} from '@monorail/components'
import {
  Box,
  LocalizationProvider,
  MobileDateRangePicker,
  TextField,
} from '@monorail/components'

import { story } from '../helpers/storybook.js'

/**
 * Metadata for MobileDateRangePicker stories - update/extend as needed
 */
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
        startText="Mobile start"
        value={value}
        onChange={newValue => {
          setValue(newValue)
        }}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField id="start" label="Start" {...startProps} />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField label="End" id="end" {...endProps} />
          </React.Fragment>
        )}
        {...args}
      />
    </LocalizationProvider>
  )
})

export const Default = story(Template, {
  parameters: {
    docs: {
      description: {
        component: `MobileDateRangePicker is for picking a date range on mobile. This should not likely be used directly.`,
      },
    },
  },
})
