// Edit this file to add new stories
import React from 'react'

import { story } from '../../../__tests__/helpers/storybook'
import { TextField } from '../../TextField/TextField'
import {
  DesktopDateTimePicker,
  DesktopDateTimePickerProps,
} from '../DesktopDateTimePicker'
import { defaultStoryMeta } from './DesktopDateTimePicker.stories.gen'

/**
 * Metadata for DesktopDateTimePicker stories - update/extend as needed
 */
export default {
  ...defaultStoryMeta,
  title: 'Inputs/Date and Time/Date Time/DesktopDateTimePicker',
}

/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<DesktopDateTimePickerProps<Date>>(args => {
  const [value, setValue] = React.useState<Date | null>(
    new Date('2018-01-01T00:00:00.000Z'),
  )

  return (
    <DesktopDateTimePicker
      value={value}
      onChange={newValue => {
        setValue(newValue)
      }}
      renderInput={params => <TextField {...params} />}
      {...args}
    />
  )
})

/** Default story for DesktopDateTimePicker (edit/remove by hand if needed) */
export const Default = story(Template, {
  parameters: {
    docs: {
      description: {
        component: `DesktopDateTimePicker renders a date/time picker suitable for desktop browsers. This should not likely be used directly.`,
      },
    },
  },
})
