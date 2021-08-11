// Edit this file to add new stories
import React from 'react'
import { DatePicker, DatePickerProps } from '../DatePicker'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './DatePicker.stories.gen'
import { action } from '@storybook/addon-actions'
import { TextField, TextFieldProps } from '../../TextField/TextField'
/**
 * Metadata for DatePicker stories - update/extend as needed
 */
export default { ...defaultStoryMeta }
/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<DatePickerProps<Date>>(
  args => (
    <DatePicker
      value={new Date()}
      renderInput={(params: TextFieldProps) => <TextField {...params} />}
      onChange={action('onChange')}
      {...args}
    />
  ),
  {
    args: {},
  },
)
/** Default story for DatePicker (edit/remove by hand if needed) */
export const Default = story(Template)
// TODO: add more stories below
