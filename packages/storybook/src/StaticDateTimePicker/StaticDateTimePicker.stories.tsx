// Edit this file to add new stories
import React from 'react'
import {
  StaticDateTimePicker,
  StaticDateTimePickerProps,
  TextField,
} from '@monorail/components'

import { story } from '../helpers/storybook'
/**
 * Metadata for StaticDateTimePicker stories - update/extend as needed
 */
export default {
  title: 'Inputs/Date and Time/Date Time/StaticDateTimePicker',
  component: StaticDateTimePicker,
}

/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<StaticDateTimePickerProps<Date>>(args => {
  const [value, setValue] = React.useState<Date | null>(
    new Date('2021-01-01T12:34:00.000Z'),
  )

  return (
    <StaticDateTimePicker
      displayStaticWrapperAs="desktop"
      openTo="year"
      value={value}
      onChange={newValue => {
        setValue(newValue)
      }}
      renderInput={params => <TextField {...params} />}
      {...args}
    />
  )
})

/** Default story for StaticDateTimePicker (edit/remove by hand if needed) */
export const Default = story(Template, {
  parameters: {
    docs: {
      description: {
        component: `It's possible to render any date & time picker inline. This will enable building custom popover/modal containers.`,
      },
    },
  },
})
// TODO: add more stories below
