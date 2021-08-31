// Edit this file to add new stories
import React from 'react'
import {
  DateRangePickerDay,
  DateRangePickerDayProps,
} from '../DateRangePickerDay'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './DateRangePickerDay.stories.gen'
import { action } from '@storybook/addon-actions'

/**
 * Metadata for DateRangePickerDay stories - update/extend as needed
 */
export default {
  ...defaultStoryMeta,
  title: 'Inputs/Date and Time/Date Range/DateRangePicker/DateRangePickerDay',
}

/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<DateRangePickerDayProps<Date>>(
  args => (
    <DateRangePickerDay
      isHighlighting={false}
      isStartOfHighlighting={false}
      isEndOfHighlighting={false}
      isPreviewing={false}
      isStartOfPreviewing={false}
      isEndOfPreviewing={false}
      day={new Date()}
      onDaySelect={action('onDaySelect')}
      outsideCurrentMonth={false}
      {...args}
    />
  ),
  { args: {} },
)

/** Default story for DateRangePickerDay (edit/remove by hand if needed) */
export const Default = story(Template)
// TODO: add more stories below
