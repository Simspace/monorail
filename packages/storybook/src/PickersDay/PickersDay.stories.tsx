// Edit this file to add new stories
import React from 'react'
import { styled } from '@mui/material'
import { endOfWeek, isSameDay, isWithinInterval, startOfWeek } from 'date-fns'

import type { PickersDayProps } from '@monorail/components'
import { PickersDay, StaticDatePicker } from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default {
  title: 'Inputs/Date and Time/Date/PickersDay',
  component: PickersDay,
}

type CustomPickerDayProps = PickersDayProps<Date> & {
  dayIsBetween: boolean
  isFirstDay: boolean
  isLastDay: boolean
}

const CustomPickersDay = styled(PickersDay, {
  shouldForwardProp: (prop) =>
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

const Template = story<PickersDayProps<Date>>(
  (args) => {
    const [value, setValue] = React.useState<Date | null>(new Date('2021-01-01T12:34:00.000Z'))

    const renderWeekPickerDay = (props: PickersDayProps<Date>) => {
      if (!value) {
        return <PickersDay {...props} />
      }

      const start = startOfWeek(value)
      const end = endOfWeek(value)

      const dayIsBetween = isWithinInterval(props.day, { start, end })
      const isFirstDay = isSameDay(props.day, start)
      const isLastDay = isSameDay(props.day, end)

      return (
        <CustomPickersDay
          {...props}
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
        displayStaticWrapperAs='desktop'
        value={value}
        onChange={(newValue) => {
          setValue(newValue)
        }}
        slots={{
          day: renderWeekPickerDay,
        }}
      />
    )
  },
  { muiName: 'MuiPickersDay' },
)

/**
 * `PickersDay` can be used to customize how the day is rendered in a `DatePicker`
 */
export const Default = story(Template, {
  parameters: {
    a11y: {
      config: {
        rules: { 'aria-required-children': { enabled: false } }, // MUI component violates a11y
      },
    },
  },
})
