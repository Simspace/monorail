// Edit this file to add new stories
import React from 'react'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'

import { story } from '../../../__tests__/helpers/storybook'
import { TextField } from '../../TextField/TextField'
import { TimePickerProps } from '../../TimePicker/TimePicker'
import { StaticTimePicker } from '../StaticTimePicker'
import { defaultStoryMeta } from './StaticTimePicker.stories.gen'

/**
 * Metadata for StaticTimePicker stories - update/extend as needed
 */
export default {
  ...defaultStoryMeta,
  title: 'Inputs/Date and Time/Time/StaticTimePicker',
}

const Template = story<TimePickerProps<Date>>(args => {
  const [value, setValue] = React.useState<Date | null>(
    new Date('2021-01-01T12:34:00.000Z'),
  )

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StaticTimePicker
        {...args}
        displayStaticWrapperAs="mobile"
        value={value}
        onChange={newValue => {
          setValue(newValue)
        }}
        renderInput={params => <TextField {...params} />}
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
