// Edit this file to add new stories
import React from 'react'
import { PickersDay, PickersDayProps } from '../PickersDay'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './PickersDay.stories.gen'
import { action } from '@storybook/addon-actions'
/**
 * Metadata for PickersDay stories - update/extend as needed
 */
export default { ...defaultStoryMeta }
/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<PickersDayProps<Date>>(
  args => (
    <PickersDay
      value={1}
      day={new Date()}
      outsideCurrentMonth={true}
      onDaySelect={action('onDaySelect')}
      onChange={action('onChange')}
      {...args}
    />
  ),
  {
    args: {},
  },
)
/** Default story for PickersDay (edit/remove by hand if needed) */
export const Default = story(Template)
// TODO: add more stories below
