// Edit this file to add new stories
import React from 'react'
import ClockIcon from '@mui/icons-material/AccessTime'
import AlarmIcon from '@mui/icons-material/Alarm'
import SnoozeIcon from '@mui/icons-material/Snooze'
import { action } from '@storybook/addon-actions'

import { story } from '../../../__tests__/helpers/storybook'
import { AdapterDateFns, LocalizationProvider } from '../../../helpers/dateTime'
import { DesktopDateTimePicker } from '../../DesktopDateTimePicker/DesktopDateTimePicker'
import { MobileDateTimePicker } from '../../MobileDateTimePicker/MobileDateTimePicker'
import { Stack } from '../../Stack/Stack'
import { StaticDateTimePicker } from '../../StaticDateTimePicker/StaticDateTimePicker'
import { TextField } from '../../TextField/TextField'
import { DateTimePicker, DateTimePickerProps } from '../DateTimePicker'
import { defaultStoryMeta } from './DateTimePicker.stories.gen'

/**
 * Metadata for DateTimePicker stories - update/extend as needed
 */
export default {
  ...defaultStoryMeta,
  title: 'Inputs/Date and Time/Date Time/DateTimePicker',
}

/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<DateTimePickerProps<Date>>(args => {
  const [value, setValue] = React.useState<Date | null>(
    new Date('2018-01-01T00:00:00.000Z'),
  )

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateTimePicker
        renderInput={props => <TextField {...props} />}
        label="DateTimePicker"
        value={value}
        onChange={newValue => {
          setValue(newValue)
        }}
        {...args}
      />
    </LocalizationProvider>
  )
})

/** Default story for DateTimePicker (edit/remove by hand if needed) */
export const Default = story(Template, {
  parameters: {
    docs: {
      description: {
        component: `DateTimePicker is for picking a specific date and time. Allows choosing date then time. There are 4 steps available (year, date, hour and minute), so tabs are required to visually distinguish date/time steps.`,
      },
    },
  },
})

export const Responsiveness = story<DateTimePickerProps<Date>>(
  args => {
    const [value, setValue] = React.useState<Date | null>(
      new Date('2018-01-01T00:00:00.000Z'),
    )

    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack spacing={3}>
          <MobileDateTimePicker
            value={value}
            onChange={newValue => {
              setValue(newValue)
            }}
            renderInput={params => <TextField {...params} />}
          />
          <DesktopDateTimePicker
            value={value}
            onChange={newValue => {
              setValue(newValue)
            }}
            renderInput={params => <TextField {...params} />}
          />
          <DateTimePicker
            renderInput={params => <TextField {...params} />}
            value={value}
            onChange={newValue => {
              setValue(newValue)
            }}
          />
        </Stack>
      </LocalizationProvider>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `The DateTimePicker component is designed and optimized for the device it runs on.

- The MobileDateTimePicker component works best for touch devices and small screens.
- The DesktopDateTimePicker component works best for mouse devices and large screens.

By default, the DateTimePicker component renders the desktop version if the media query @media (pointer: fine) matches. This can be customized with the desktopModeMediaQuery prop.`,
        },
      },
    },
  },
)

export const FormProps = story<DateTimePickerProps<Date>>(
  args => {
    const [value, setValue] = React.useState<Date | null>(null)

    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack spacing={3}>
          <DateTimePicker
            label="disabled"
            disabled
            value={value}
            onChange={newValue => {
              setValue(newValue)
            }}
            renderInput={params => <TextField {...params} />}
          />
          <DateTimePicker
            label="read-only"
            readOnly
            value={value}
            onChange={newValue => {
              setValue(newValue)
            }}
            renderInput={params => <TextField {...params} />}
          />
        </Stack>
      </LocalizationProvider>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `The date time picker component can be disabled or read-only.`,
        },
      },
    },
  },
)

export const DateAndTimeValidation = story<DateTimePickerProps<Date>>(
  args => {
    const [value, setValue] = React.useState<Date | null>(
      new Date('2021-01-01T12:34:00.000Z'),
    )

    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack spacing={3}>
          <DateTimePicker
            renderInput={params => <TextField {...params} />}
            label="Ignore date and time"
            value={value}
            onChange={newValue => {
              setValue(newValue)
            }}
            minDateTime={new Date('2021-01-01T12:34:00.000Z')}
          />
          <DateTimePicker
            renderInput={params => <TextField {...params} />}
            label="Ignore time in each day"
            value={value}
            onChange={newValue => {
              setValue(newValue)
            }}
            minDate={new Date('2020-02-14')}
            minTime={new Date(0, 0, 0, 8)}
            maxTime={new Date(0, 0, 0, 18, 45)}
          />
        </Stack>
      </LocalizationProvider>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `It is possible to restrict date and time selection in two ways:

- by using minDateTime/maxDateTime its possible to restrict time selection to before or after a particular moment in time
- using minTime/maxTime, you can disable selecting times before or after a certain time each day respectively`,
        },
      },
    },
  },
)

export const StaticMode = story<DateTimePickerProps<Date>>(
  args => {
    const [value, setValue] = React.useState<Date | null>(
      new Date('2021-01-01T12:34:00.000Z'),
    )

    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StaticDateTimePicker
          displayStaticWrapperAs="desktop"
          openTo="year"
          value={value}
          onChange={newValue => {
            setValue(newValue)
          }}
          renderInput={params => <TextField {...params} />}
        />
      </LocalizationProvider>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `It's possible to render any date & time picker inline. This will enable building custom popover/modal containers.`,
        },
      },
    },
  },
)

export const Customization = story<DateTimePickerProps<Date>>(
  args => {
    const [clearedDate, setClearedDate] = React.useState<Date | null>(null)

    const [value, setValue] = React.useState<Date | null>(
      new Date('2019-01-01T18:54'),
    )

    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack spacing={3}>
          <DateTimePicker
            disableFuture
            hideTabs
            showTodayButton
            todayText="now"
            openTo="hours"
            value={value}
            onChange={newValue => {
              setValue(newValue)
            }}
            minDate={new Date('2018-01-01')}
            components={{
              LeftArrowIcon: AlarmIcon,
              RightArrowIcon: SnoozeIcon,
              OpenPickerIcon: ClockIcon,
            }}
            leftArrowButtonText="Open previous month"
            rightArrowButtonText="Open next month"
            minTime={new Date(0, 0, 0, 9)}
            maxTime={new Date(0, 0, 0, 20)}
            renderInput={params => (
              <TextField {...params} helperText="Hardcoded helper text" />
            )}
          />
          <MobileDateTimePicker
            value={value}
            onChange={newValue => {
              setValue(newValue)
            }}
            label="With error handler"
            onError={console.log}
            minDate={new Date('2018-01-01T00:00')}
            inputFormat="yyyy/MM/dd hh:mm a"
            mask="___/__/__ __:__ _M"
            renderInput={params => <TextField {...params} />}
          />
          <DateTimePicker
            clearable
            value={clearedDate}
            onChange={newValue => setClearedDate(newValue)}
            renderInput={params => (
              <TextField {...params} helperText="Clear Initial State" />
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
          story: `Here are some examples of heavily customized date & time pickers:`,
        },
      },
    },
  },
)
