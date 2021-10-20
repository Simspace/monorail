// Edit this file to add new stories
import React from 'react'
import { endOfWeek, isSameDay, isWithinInterval, startOfWeek } from 'date-fns'

import { story } from '../../../__tests__/helpers/storybook'
import { styled } from '../../../helpers/styles'
import { StaticDatePicker } from '../../StaticDatePicker/StaticDatePicker'
import { TextField } from '../../TextField/TextField'
import { PickersDay, PickersDayProps } from '../PickersDay'
import { defaultStoryMeta } from './PickersDay.stories.gen'

/**
 * Metadata for PickersDay stories - update/extend as needed
 */
export default {
  ...defaultStoryMeta,
  title: 'Inputs/Date and Time/Date/PickersDay',
}

type CustomPickerDayProps = PickersDayProps<Date> & {
  dayIsBetween: boolean
  isFirstDay: boolean
  isLastDay: boolean
}

const CustomPickersDay = styled(PickersDay, {
  shouldForwardProp: prop =>
    prop !== 'dayIsBetween' && prop !== 'isFirstDay' && prop !== 'isLastDay',
})<CustomPickerDayProps>(({ theme, dayIsBetween, isFirstDay, isLastDay }) => ({
  ...(dayIsBetween && {
    borderRadius: 0,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.primary.dark,
    },
  }),
  ...(isFirstDay && {
    borderTopLeftRadius: '50%',
    borderBottomLeftRadius: '50%',
  }),
  ...(isLastDay && {
    borderTopRightRadius: '50%',
    borderBottomRightRadius: '50%',
  }),
})) as React.ComponentType<CustomPickerDayProps>

/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<PickersDayProps<Date>>(args => {
  const [value, setValue] = React.useState<Date | null>(
    new Date('2021-01-01T12:34:00.000Z'),
  )

  const renderWeekPickerDay = (
    date: Date,
    selectedDates: Array<Date | null>,
    pickersDayProps: PickersDayProps<Date>,
  ) => {
    if (!value) {
      return <PickersDay {...pickersDayProps} />
    }

    const start = startOfWeek(value)
    const end = endOfWeek(value)

    const dayIsBetween = isWithinInterval(date, { start, end })
    const isFirstDay = isSameDay(date, start)
    const isLastDay = isSameDay(date, end)

    return (
      <CustomPickersDay
        {...pickersDayProps}
        disableMargin
        dayIsBetween={dayIsBetween}
        isFirstDay={isFirstDay}
        isLastDay={isLastDay}
        {...args}
      />
    )
  }

  return (
    <StaticDatePicker
      displayStaticWrapperAs="desktop"
      label="Week picker"
      value={value}
      onChange={newValue => {
        setValue(newValue)
      }}
      renderDay={renderWeekPickerDay}
      renderInput={params => <TextField {...params} />}
      inputFormat="'Week of' MMM d"
    />
  )
})

export const Default = story(Template, {
  parameters: {
    docs: {
      description: {
        component: `PickersDay can be used to customize how the day is rendered in a DatePicker`,
      },
    },
  },
})
