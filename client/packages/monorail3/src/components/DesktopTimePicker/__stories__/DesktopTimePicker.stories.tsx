// Edit this file to add new stories
import React from 'react'
import { DesktopTimePicker, DesktopTimePickerProps } from '../DesktopTimePicker'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './DesktopTimePicker.stories.gen'
import { action } from '@storybook/addon-actions'
import { TextField } from '../../TextField/TextField'

/**
 * Metadata for DesktopTimePicker stories - update/extend as needed
 */
export default {
  ...defaultStoryMeta,
  title: 'Inputs/Date and Time/Time/DesktopTimePicker',
}

/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<DesktopTimePickerProps<Date>>(
  args => {
    const [value, setValue] = React.useState<Date | null>(
      new Date('2018-01-01T00:00:00.000Z'),
    )

    return (
      <DesktopTimePicker
        label="For desktop"
        value={value}
        onChange={newValue => {
          setValue(newValue)
        }}
        renderInput={params => <TextField {...params} />}
        {...args}
      />
    )
  },
  { args: {} },
)

/** Default story for DesktopTimePicker (edit/remove by hand if needed) */
export const Default = story(Template, {
  parameters: {
    docs: {
      description: {
        component: `DesktopTimePicker is a lower-level component which renders a time picker suitable for desktop browsers. This should not likely be used directly.`,
      },
    },
  },
})
