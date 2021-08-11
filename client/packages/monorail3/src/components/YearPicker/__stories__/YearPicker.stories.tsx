// Edit this file to add new stories
import React from 'react'
import { YearPicker, YearPickerProps } from '../YearPicker'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './YearPicker.stories.gen'
import { action } from '@storybook/addon-actions'
/**
 * Metadata for YearPicker stories - update/extend as needed
 */
export default { ...defaultStoryMeta }
/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<YearPickerProps<Date>>(
  args => (
    <YearPicker
      date={new Date()}
      minDate={new Date(1992, 0, 1)}
      maxDate={new Date(2020, 0, 1)}
      isDateDisabled={_date => false}
      onChange={action('onChange')}
      {...args}
    />
  ),
  {
    args: {},
  },
)
/** Default story for YearPicker (edit/remove by hand if needed) */
export const Default = story(Template)
// TODO: add more stories below
