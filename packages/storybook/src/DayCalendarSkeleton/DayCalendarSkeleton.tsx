// Edit this file to add new stories
import React from 'react'

import type { DayCalendarSkeletonProps } from '@monorail/components'
import { DayCalendarSkeleton } from '@monorail/components'

import { story } from '../helpers/storybook.js'

/**
 * Metadata for CalendarPickerSkeleton stories - update/extend as needed
 */
export default {
  title: 'Inputs/Date and Time/Date/CalendarPicker/DayCalendarSkeleton',
  component: DayCalendarSkeleton,
}

/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<DayCalendarSkeletonProps>(
  args => <DayCalendarSkeleton {...args} />,
  { muiName: 'MuiDayCalendarSkeleton' },
)

/** Default story for CalendarPickerSkeleton (edit/remove by hand if needed) */
export const Default = story(Template, {
  parameters: {
    docs: {
      description: {
        component: `DayCalendarSkeleton is a loading placeholder component for the DateCalendar`,
      },
    },
  },
})
