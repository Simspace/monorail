// Edit this file to add new stories
import React from 'react'
import {
  DateRangePickerDay,
  DateRangePickerDayProps,
} from '../DateRangePickerDay'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './DateRangePickerDay.stories.gen'
import { action } from '@storybook/addon-actions'
import { styled } from '../../../helpers/styles'
import { AdapterDateFns, LocalizationProvider } from '../../../helpers/dateTime'
import { StaticDateRangePicker } from '../../StaticDateRangePicker/StaticDateRangePicker'
import { DateRange } from '../../DateRangePicker/DateRangePicker'
import { Box } from '../../Box/Box'
import { TextField } from '../../TextField/TextField'

/**
 * Metadata for DateRangePickerDay stories - update/extend as needed
 */
export default {
  ...defaultStoryMeta,
  title: 'Inputs/Date and Time/Date Range/DateRangePicker/DateRangePickerDay',
}

const StyledDateRangePickerDay = styled(DateRangePickerDay)(
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

const Template = story(() => {
  const [value, setValue] = React.useState<DateRange<Date>>([null, null])

  const renderWeekPickerDay = (
    date: Date,
    dateRangePickerDayProps: DateRangePickerDayProps<Date>,
  ) => {
    return <StyledDateRangePickerDay {...dateRangePickerDayProps} />
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StaticDateRangePicker
        displayStaticWrapperAs="desktop"
        label="date range"
        value={value}
        onChange={newValue => setValue(newValue)}
        renderDay={renderWeekPickerDay}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField {...endProps} />
          </React.Fragment>
        )}
      />
    </LocalizationProvider>
  )
}, {})

export const Default = story(Template, {
  parameters: {
    docs: {
      description: {
        component: `The displayed days are customizable with the renderDay function prop. You can take advantage of the internal DateRangePickerDay component.`,
      },
    },
  },
})
