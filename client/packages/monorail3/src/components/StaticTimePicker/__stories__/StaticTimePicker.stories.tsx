// Edit this file to add new stories
import React from 'react'
import { StaticTimePicker, StaticTimePickerProps } from '../StaticTimePicker'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './StaticTimePicker.stories.gen'
import { action } from '@storybook/addon-actions'
import { TextField } from '../../TextField/TextField'

/**
 * Metadata for StaticTimePicker stories - update/extend as needed
 */
export default {
  ...defaultStoryMeta,
  title: 'Inputs/Date and Time/Time/StaticTimePicker',
}

/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<StaticTimePickerProps<Date>>(
  args => (
    <StaticTimePicker
      value={new Date()}
      renderInput={params => <TextField {...params} />}
      onChange={action('onChange')}
      {...args}
    />
  ),
  { args: {} },
)

/** Default story for StaticTimePicker (edit/remove by hand if needed) */
export const Default = story(Template)
