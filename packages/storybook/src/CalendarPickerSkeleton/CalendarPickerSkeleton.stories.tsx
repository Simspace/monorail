// Edit this file to add new stories
import React from 'react'

import type { CalendarPickerSkeletonProps } from '@monorail/components'
import { CalendarPickerSkeleton } from '@monorail/components'

import { story } from '../helpers/storybook.js'

/**
 * Metadata for CalendarPickerSkeleton stories - update/extend as needed
 */
export default {
  title: 'Inputs/Date and Time/Date/CalendarPicker/CalendarPickerSkeleton',
  component: CalendarPickerSkeleton,
}

/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<CalendarPickerSkeletonProps>(
  args => <CalendarPickerSkeleton {...args} />,
  { muiName: 'MuiCalendarPickerSkeleton' },
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