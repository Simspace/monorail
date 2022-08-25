// Edit this file to add new stories
import React from 'react'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'

import type { TimePickerProps } from '@monorail/components'
import {
  LocalizationProvider,
  StaticTimePicker,
  TextField,
} from '@monorail/components'

import { story } from '../helpers/storybook.js'

/**
 * Metadata for StaticTimePicker stories - update/extend as needed
 */
export default {
  title: 'Inputs/Date and Time/Time/StaticTimePicker',
  component: StaticTimePicker,
}

const Template = story<TimePickerProps<Date>>(args => {
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
        renderInput={params => <TextField {...params} />}
        {...args}
      />
    </LocalizationProvider>
  )
})

/** Default story for StaticTimePicker (edit/remove by hand if needed) */
export const Default = story(Template, {
  parameters: {
    docs: {
      description: {
        component: `It's possible to render any time picker inline. This will enable building custom popover/modal containers.`,
      },
    },
  },
})
