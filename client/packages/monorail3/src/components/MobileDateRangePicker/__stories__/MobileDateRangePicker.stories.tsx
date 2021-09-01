// Edit this file to add new stories
import React from 'react'
import {
  MobileDateRangePicker,
  MobileDateRangePickerProps,
} from '../MobileDateRangePicker'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './MobileDateRangePicker.stories.gen'
import { action } from '@storybook/addon-actions'
import { TextField } from '../../TextField/TextField'
import { DateRange } from '@material-ui/lab/DateRangePicker/RangeTypes'
import { AdapterDateFns, LocalizationProvider } from '../../../helpers/dateTime'
import { Box } from '../../Box/Box'

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
        startText="Mobile start"
        value={value}
        onChange={newValue => {
          setValue(newValue)
        }}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField {...endProps} />
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
