// Edit this file to add new stories
import React from 'react'
import { styled } from '@mui/material'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'

import type { DateRange, DateRangePickerDayProps } from '@monorail/components'
import {
  DateRangePickerDay,
  LocalizationProvider,
  StaticDateRangePicker,
} from '@monorail/components'

import { story } from '../helpers/storybook.js'

/**
 * Metadata for DateRangePickerDay stories - update/extend as needed
 */
export default {
  title: 'Inputs/Date and Time/Date Range/DateRangePicker/DateRangePickerDay',
  component: DateRangePickerDay,
}

const StyledDateRangePickerDay = styled(DateRangePickerDay)(
  // TODO: not typechecking
  // @ts-ignore
  ({ theme, isHighlighting, isStartOfHighlighting, isEndOfHighlighting }) => ({
    ...(isHighlighting && {
      borderRadius: 0,
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      '&:hover, &:focus': {
        backgroundColor: theme.palette.primary.dark,
      },
    }),
    ...(isStartOfHighlighting && {
      borderTopLeftRadius: '50%',
      borderBottomLeftRadius: '50%',
    }),
    ...(isEndOfHighlighting && {
      borderTopRightRadius: '50%',
      borderBottomRightRadius: '50%',
    }),
  }),
) as React.ComponentType<DateRangePickerDayProps<Date>>

const Template = story<DateRangePickerDayProps<Date>>(
  (_args: Partial<DateRangePickerDayProps<Date>>) => {
    const [value, setValue] = React.useState<DateRange<Date>>([
      new Date('2021-01-05T12:34:00.000Z'),
      new Date('2021-01-09T12:34:00.000Z'),
    ])

    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StaticDateRangePicker
          displayStaticWrapperAs="desktop"
          value={value}
          onChange={newValue => setValue(newValue)}
          slots={{
            day: StyledDateRangePickerDay,
          }}
        />
      </LocalizationProvider>
    )
  },
  { muiName: 'MuiDateRangePickerDay' },
)

export const Default = story(Template, {
  parameters: {
    docs: {
      description: {
        component: `The displayed days are customizable with the renderDay function prop. You can take advantage of the internal DateRangePickerDay component.`,
      },
    },
  },
})
