// Edit this file to add new stories
import React from 'react'
import { CalendarPicker, CalendarPickerProps } from '../CalendarPicker'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './CalendarPicker.stories.gen'
import { action } from '@storybook/addon-actions'
/**
 * Metadata for CalendarPicker stories - update/extend as needed
 */
export default {
  ...defaultStoryMeta,
  title: 'Inputs/Date and Time/Date/CalendarPicker',
}

/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<CalendarPickerProps<Date>>(
  args => (
    <CalendarPicker date={new Date()} onChange={action('onChange')} {...args} />
  ),
  { args: {} },
)

/** Default story for CalendarPicker (edit/remove by hand if needed) */
export const Default = story(Template)
