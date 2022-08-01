// Edit this file to add new stories
import React from 'react'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'

import {
  Box,
  DateRange,
  DateRangePickerDay,
  DateRangePickerDayProps,
  LocalizationProvider,
  StaticDateRangePicker,
  styled,
  TextField,
} from '../../..'
import { story } from '../../../test-helpers/storybook'

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
