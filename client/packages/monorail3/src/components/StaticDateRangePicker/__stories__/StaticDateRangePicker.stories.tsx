// Edit this file to add new stories
import React from 'react'
import {
  StaticDateRangePicker,
  StaticDateRangePickerProps,
} from '../StaticDateRangePicker'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './StaticDateRangePicker.stories.gen'
import { action } from '@storybook/addon-actions'
import { TextField } from '../../TextField/TextField'

/**
 * Metadata for StaticDateRangePicker stories - update/extend as needed
 */
export default {
  ...defaultStoryMeta,
  title: 'Inputs/Date and Time/Date Range/StaticDateRangePicker',
}

/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<StaticDateRangePickerProps<Date>>(
  args => (
    <StaticDateRangePicker
      value={[new Date(), new Date()]}
      renderInput={params => <TextField {...params} />}
      onChange={action('onChange')}
      {...args}
    />
  ),
  { args: {} },
)

/** Default story for StaticDateRangePicker (edit/remove by hand if needed) */
export const Default = story(Template)
// TODO: add more stories below
