// Edit this file to add new stories
import React from 'react'
import { action } from '@storybook/addon-actions'

import { story } from '../../../__tests__/helpers/storybook'
import { AdapterDateFns, LocalizationProvider } from '../../../helpers/dateTime'
import { Box } from '../../Box/Box'
import { DateRange } from '../../DateRangePicker/DateRangePicker'
import { TextField } from '../../TextField/TextField'
import {
  StaticDateRangePicker,
  StaticDateRangePickerProps,
} from '../StaticDateRangePicker'
import { defaultStoryMeta } from './StaticDateRangePicker.stories.gen'

/**
 * Metadata for StaticDateRangePicker stories - update/extend as needed
 */
export default {
  ...defaultStoryMeta,
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
