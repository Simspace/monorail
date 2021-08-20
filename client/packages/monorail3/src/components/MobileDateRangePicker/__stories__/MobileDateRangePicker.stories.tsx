// Edit this file to add new stories
import React from 'react'
import {
  MobileDateRangePicker,
  MobileDateRangePickerProps,
} from '../MobileDateRangePicker'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './MobileDateRangePicker.stories.gen'
import { action } from '@storybook/addon-actions'
import { TextField } from '../../TextField/TextField'
/**
 * Metadata for MobileDateRangePicker stories - update/extend as needed
 */
export default { ...defaultStoryMeta }
/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<MobileDateRangePickerProps<Date>>(
  args => (
    <MobileDateRangePicker
      value={[new Date(), new Date()]}
      renderInput={params => <TextField {...params} />}
      onChange={action('onChange')}
      {...args}
    />
  ),
  { args: {} },
)
/** Default story for MobileDateRangePicker (edit/remove by hand if needed) */
export const Default = story(Template)
// TODO: add more stories below
