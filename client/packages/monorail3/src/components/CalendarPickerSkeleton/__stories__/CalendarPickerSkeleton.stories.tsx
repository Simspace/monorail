// Edit this file to add new stories
import React from 'react'
import {
  CalendarPickerSkeleton,
  CalendarPickerSkeletonProps,
} from '../CalendarPickerSkeleton'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './CalendarPickerSkeleton.stories.gen'

/**
 * Metadata for CalendarPickerSkeleton stories - update/extend as needed
 */
export default {
  ...defaultStoryMeta,
  title: 'Inputs/Date and Time/Date/CalendarPicker/CalendarPickerSkeleton',
}

/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<CalendarPickerSkeletonProps>(
  args => <CalendarPickerSkeleton {...args} />,
  { args: {} },
)

/** Default story for CalendarPickerSkeleton (edit/remove by hand if needed) */
export const Default = story(Template, {
  parameters: {
    docs: {
      description: {
        component: `CalendarPickerSkeleton is a loading placeholder component for the CalendarPicker`,
      },
    },
  },
})
