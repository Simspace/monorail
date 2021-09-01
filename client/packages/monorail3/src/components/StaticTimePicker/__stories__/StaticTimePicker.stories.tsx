// Edit this file to add new stories
import React from 'react'
import { StaticTimePicker, StaticTimePickerProps } from '../StaticTimePicker'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './StaticTimePicker.stories.gen'
import { action } from '@storybook/addon-actions'
import { TextField } from '../../TextField/TextField'
import { TimePickerProps } from '../../TimePicker/TimePicker'
import AdapterDateFns from '@material-ui/lab/AdapterDateFns'
import LocalizationProvider from '@material-ui/lab/LocalizationProvider'

/**
 * Metadata for StaticTimePicker stories - update/extend as needed
 */
export default {
  ...defaultStoryMeta,
  title: 'Inputs/Date and Time/Time/StaticTimePicker',
}

const Template = story<TimePickerProps<Date>>(args => {
  const [value, setValue] = React.useState<Date | null>(new Date())

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StaticTimePicker
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
