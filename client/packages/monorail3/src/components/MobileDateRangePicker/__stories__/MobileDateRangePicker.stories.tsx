// Edit this file to add new stories
import React from 'react'
import { DateRange } from '@mui/lab/DateRangePicker/RangeTypes'
import { action } from '@storybook/addon-actions'

import { story } from '../../../__tests__/helpers/storybook'
import { AdapterDateFns, LocalizationProvider } from '../../../helpers/dateTime'
import { Box } from '../../Box/Box'
import { TextField } from '../../TextField/TextField'
import {
  MobileDateRangePicker,
  MobileDateRangePickerProps,
} from '../MobileDateRangePicker'
import { defaultStoryMeta } from './MobileDateRangePicker.stories.gen'

/**
 * Metadata for MobileDateRangePicker stories - update/extend as needed
 */
export default {
  ...defaultStoryMeta,
  title: 'Inputs/Date and Time/Date Range/MobileDateRangePicker',
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
      />
    </LocalizationProvider>
  )
})

/** Default story for MobileDateRangePicker (edit/remove by hand if needed) */
export const Default = story(Template, {
  parameters: {
    docs: {
      description: {
        component: `MobileDateRangePicker is for picking a date range on mobile. This should not likely be used directly.`,
      },
    },
  },
})
