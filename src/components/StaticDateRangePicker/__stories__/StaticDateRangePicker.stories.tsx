// Edit this file to add new stories
import React from 'react'
import {
  DateRange,
  LocalizationProvider,
  StaticDateRangePicker,
  StaticDateRangePickerProps,
} from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import { Box, TextField } from '@mui/material'

import { story } from '../../../__tests__/helpers/storybook'

/**
 * Metadata for StaticDateRangePicker stories - update/extend as needed
 */
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
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField {...endProps} />
          </React.Fragment>
        )}
        {...args}
      />
    </LocalizationProvider>
  )
})

/** Default story for StaticDateRangePicker (edit/remove by hand if needed) */
export const Default = story(Template, {
  parameters: {
    docs: {
      description: {
        component: `It's possible to render any picker inline. This will enable building custom popover/modal containers.`,
      },
    },
  },
})
