// Edit this file to add new stories
import React from 'react'
import { MonthPicker, MonthPickerProps } from '../MonthPicker'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './MonthPicker.stories.gen'
import { action } from '@storybook/addon-actions'
/**
 * Metadata for MonthPicker stories - update/extend as needed
 */
export default { ...defaultStoryMeta }
/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<MonthPickerProps<Date>>(
  args => (
    <MonthPicker
      date={new Date()}
      minDate={new Date(1992, 0, 1)}
      maxDate={new Date(2020, 0, 1)}
      onChange={action('onChange')}
      {...args}
    />
  ),
  {
    args: {},
  },
)
/** Default story for MonthPicker (edit/remove by hand if needed) */
export const Default = story(Template)
// TODO: add more stories below
