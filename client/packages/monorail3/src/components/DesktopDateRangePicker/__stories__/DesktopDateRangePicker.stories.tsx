// Edit this file to add new stories
import React from 'react'
import { DateRange } from '@mui/lab/DateRangePicker/RangeTypes'

import { story } from '../../../__tests__/helpers/storybook'
import { AdapterDateFns, LocalizationProvider } from '../../../helpers/dateTime'
import { Box } from '../../Box/Box'
import { TextField } from '../../TextField/TextField'
import {
  DesktopDateRangePicker,
  DesktopDateRangePickerProps,
} from '../DesktopDateRangePicker'
import { defaultStoryMeta } from './DesktopDateRangePicker.stories.gen'

/**
 * Metadata for DesktopDateRangePicker stories - update/extend as needed
 */
export default {
  ...defaultStoryMeta,
  title: 'Inputs/Date and Time/Date Range/DesktopDateRangePicker',
}

const Template = story<DesktopDateRangePickerProps<Date>>(args => {
  const [value, setValue] = React.useState<DateRange<Date>>([null, null])

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDateRangePicker
        startText="Desktop start"
        value={value}
        onChange={newValue => {
          setValue(newValue)
        }}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField id="start" label="Start" {...startProps} />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField id="end" label="End" {...endProps} />
          </React.Fragment>
        )}
        {...args}
      />
    </LocalizationProvider>
  )
})

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
