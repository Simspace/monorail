// Edit this file to add new stories
import React from 'react'
import {
  DateRange,
  DateRangePicker,
  DateRangePickerProps,
} from '../DateRangePicker'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './DateRangePicker.stories.gen'
import { action } from '@storybook/addon-actions'
import { TextField } from '../../TextField/TextField'
import { Box } from '../../Box/Box'
import { AdapterDateFns, LocalizationProvider } from '../../../helpers/dateTime'
import { StaticDateRangePicker } from '../../StaticDateRangePicker/StaticDateRangePicker'
import { Stack } from '../../Stack/Stack'
import { MobileDateRangePicker } from '../../MobileDateRangePicker/MobileDateRangePicker'
import { DesktopDateRangePicker } from '../../DesktopDateRangePicker/DesktopDateRangePicker'
import { Typography } from '../../Typography/Typography'
import { addWeeks } from 'date-fns'
import { styled } from '../../../helpers/styles'
import {
  DateRangePickerDay,
  DateRangePickerDayProps,
} from '../../DateRangePickerDay/DateRangePickerDay'

/**
 * Metadata for DateRangePicker stories - update/extend as needed
 */
export default {
  ...defaultStoryMeta,
  title: 'Inputs/Date and Time/Date Range/DateRangePicker',
}

/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<DateRangePickerProps<Date>>(args => {
  const [value, setValue] = React.useState<DateRange<Date>>([null, null])

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateRangePicker
        startText="Check-in"
        endText="Check-out"
        value={value}
        onChange={newValue => {
          setValue(newValue)
        }}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField {...endProps} />
          </React.Fragment>
        )}
        {...args}
      />
    </LocalizationProvider>
  )
})

export const Default = story(Template, {
  parameters: {
    docs: {
      description: {
        component: `DateRangePicker lets the user select a range of dates. You can pass any prop from DatePicker to DateRangePicker.`,
      },
    },
  },
})

export const StaticMode = story(
  () => {
    const [value, setValue] = React.useState<DateRange<Date>>([null, null])

    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StaticDateRangePicker
          displayStaticWrapperAs="desktop"
          value={value}
          onChange={newValue => {
            setValue(newValue)
          }}
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
  {
    parameters: {
      docs: {
        description: {
          story: `It's possible to render any picker inline. This will enable building custom popover/modal containers.`,
        },
      },
    },
  },
)

export const Responsiveness = story(
  () => {
    const [value, setValue] = React.useState<DateRange<Date>>([null, null])

    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack spacing={3}>
          <MobileDateRangePicker
            startText="Mobile start"
            value={value}
            onChange={newValue => {
              setValue(newValue)
            }}
            renderInput={(startProps, endProps) => (
              <React.Fragment>
                <TextField {...startProps} />
                <Box sx={{ mx: 2 }}> to </Box>
                <TextField {...endProps} />
              </React.Fragment>
            )}
          />
          <DesktopDateRangePicker
            startText="Desktop start"
            value={value}
            onChange={newValue => {
              setValue(newValue)
            }}
            renderInput={(startProps, endProps) => (
              <React.Fragment>
                <TextField {...startProps} />
                <Box sx={{ mx: 2 }}> to </Box>
                <TextField {...endProps} />
              </React.Fragment>
            )}
          />
        </Stack>
      </LocalizationProvider>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `The date range picker component is designed to be optimized for the device it runs on.

- The MobileDateRangePicker component works best for touch devices and small screens.
- The DesktopDateRangePicker component works best for mouse devices and large screens.

By default, the DateRangePicker component renders the desktop version if the media query @media (pointer: fine) matches. This can be customized with the desktopModeMediaQuery prop. This can be customized with the desktopModeMediaQuery prop.
            `,
        },
      },
    },
  },
)

export const FormProps = story(
  () => {
    const [value, setValue] = React.useState<DateRange<Date>>([null, null])

    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack spacing={3}>
          <DateRangePicker
            disabled
            startText="disabled start"
            endText="disabled end"
            value={value}
            onChange={newValue => {
              setValue(newValue)
            }}
            renderInput={(startProps, endProps) => (
              <React.Fragment>
                <TextField {...startProps} />
                <Box sx={{ mx: 2 }}> to </Box>
                <TextField {...endProps} />
              </React.Fragment>
            )}
          />
          <DateRangePicker
            readOnly
            startText="read-only start"
            endText="read-only end"
            value={value}
            onChange={newValue => {
              setValue(newValue)
            }}
            renderInput={(startProps, endProps) => (
              <React.Fragment>
                <TextField {...startProps} />
                <Box sx={{ mx: 2 }}> to </Box>
                <TextField {...endProps} />
              </React.Fragment>
            )}
          />
        </Stack>
      </LocalizationProvider>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `The date range picker component can be disabled or read-only.`,
        },
      },
    },
  },
)

export const DifferentNumberOfMonths = story(
  () => {
    const [value, setValue] = React.useState<DateRange<Date>>([null, null])

    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Box>
          <Typography sx={{ mt: 2, mb: 1 }}>1 calendar </Typography>
          <DateRangePicker
            calendars={1}
            value={value}
            onChange={newValue => {
              setValue(newValue)
            }}
            renderInput={(startProps, endProps) => (
              <React.Fragment>
                <TextField {...startProps} />
                <Box sx={{ mx: 2 }}> to </Box>
                <TextField {...endProps} />
              </React.Fragment>
            )}
          />
          <Typography sx={{ mt: 2, mb: 1 }}>2 calendars</Typography>
          <DateRangePicker
            calendars={2}
            value={value}
            onChange={newValue => {
              setValue(newValue)
            }}
            renderInput={(startProps, endProps) => (
              <React.Fragment>
                <TextField {...startProps} />
                <Box sx={{ mx: 2 }}> to </Box>
                <TextField {...endProps} />
              </React.Fragment>
            )}
          />
          <Typography sx={{ mt: 2, mb: 1 }}>3 calendars</Typography>
          <DateRangePicker
            calendars={3}
            value={value}
            onChange={newValue => {
              setValue(newValue)
            }}
            renderInput={(startProps, endProps) => (
              <React.Fragment>
                <TextField {...startProps} />
                <Box sx={{ mx: 2 }}> to </Box>
                <TextField {...endProps} />
              </React.Fragment>
            )}
          />
        </Box>
      </LocalizationProvider>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `Note that the calendars prop only works in desktop mode.`,
        },
      },
    },
  },
)

export const DisablingDates = story(
  () => {
    function getWeeksAfter(date: Date | null, amount: number) {
      return date ? addWeeks(date, amount) : undefined
    }

    const [value, setValue] = React.useState<DateRange<Date>>([null, null])

    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateRangePicker
          disablePast
          value={value}
          maxDate={getWeeksAfter(value[0], 4)}
          onChange={newValue => {
            setValue(newValue)
          }}
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
  {
    parameters: {
      docs: {
        description: {
          story: `Disabling dates behaves the same as the simple DatePicker.`,
        },
      },
    },
  },
)

export const CustomInputComponent = story(
  () => {
    const [value, setValue] = React.useState<DateRange<Date>>([null, null])

    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateRangePicker
          label="Advanced keyboard"
          value={value}
          onChange={newValue => setValue(newValue)}
          renderInput={(startProps, endProps) => (
            <React.Fragment>
              <input
                ref={startProps.inputRef as React.Ref<HTMLInputElement>}
                {...startProps.inputProps}
              />
              <Box sx={{ mx: 1 }}> to </Box>
              <input
                ref={endProps.inputRef as React.Ref<HTMLInputElement>}
                {...endProps.inputProps}
              />
            </React.Fragment>
          )}
        />
      </LocalizationProvider>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `You can customize the rendered input with the renderInput prop. For DateRangePicker it takes 2 parameters – for start and end input respectively. If you need to render custom inputs make sure to spread ref and inputProps correctly to the input components.`,
        },
      },
    },
  },
)

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

export const CustomizedDayRendering = story(
  () => {
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
  },
  {
    parameters: {
      docs: {
        description: {
          story: `The displayed days are customizable with the renderDay function prop. You can take advantage of the internal DateRangePickerDay component.`,
        },
      },
    },
  },
)
