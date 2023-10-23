// Edit this file to add new stories
import React from 'react'

import type { DayCalendarSkeletonProps } from '@monorail/components'
import { DayCalendarSkeleton } from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default {
  title: 'Inputs/Date and Time/Date/CalendarPicker/DayCalendarSkeleton',
  component: DayCalendarSkeleton,
}

const Template = story<DayCalendarSkeletonProps>(
  args => <DayCalendarSkeleton {...args} />,
  { muiName: 'MuiDayCalendarSkeleton' },
)

/**
 * `DayCalendarSkeleton` is a loading placeholder component for the `DateCalendar`
 */
export const Default = story(Template)
