// Edit this file to add new stories
import React from 'react'
import ClockIcon from '@mui/icons-material/AccessTime'
import AlarmIcon from '@mui/icons-material/Alarm'
import SnoozeIcon from '@mui/icons-material/Snooze'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'

import type {
  DateTimePickerProps,
  StaticDateTimePickerProps,
} from '@monorail/components'
import {
  DateTimePicker,
  DesktopDateTimePicker,
  LocalizationProvider,
  MobileDateTimePicker,
  Stack,
  StaticDateTimePicker,
  TextField,
} from '@monorail/components'

import { story } from '../helpers/storybook.js'

/**
 * Metadata for DateTimePicker stories - update/extend as needed
 */
export default {
  title: 'Inputs/Date and Time/Date Time/DateTimePicker',
  component: DateTimePicker,
}

/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<DateTimePickerProps<Date>>(
  (args: Partial<DateTimePickerProps<Date>>) => {
    const [value, setValue] = React.useState<Date | null>(
      new Date('2018-01-01T00:00:00.000Z'),
    )

    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateTimePicker
          label="DateTimePicker"
          value={value}
          onChange={newValue => {
            setValue(newValue)
          }}
          {...args}
        />
      </LocalizationProvider>
    )
  },
  { muiName: 'MuiDateTimePicker' },
)

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

export const NativePickers = story<DateTimePickerProps>(() => {
  return (
    <Stack component="form" noValidate spacing={3}>
      <TextField
        id="date"
        label="Birthday"
        type="date"
        defaultValue="2017-05-24"
        sx={{ width: 220 }}
      />
      <TextField
        id="time"
        label="Alarm clock"
        type="time"
        defaultValue="07:30"
        inputProps={{
          step: 300, // 5 min
        }}
        sx={{ width: 150 }}
      />
      <TextField
        id="datetime-local"
        label="Next appointment"
        type="datetime-local"
        defaultValue="2017-05-24T10:30"
        sx={{ width: 250 }}
      />
    </Stack>
  )
})

export const Responsiveness = story<DateTimePickerProps<Date>>(
  (args: Partial<DateTimePickerProps<Date>>) => {
    const [value, setValue] = React.useState<Date | null>(
      new Date('2018-01-01T00:00:00.000Z'),
    )

    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack spacing={3}>
          <MobileDateTimePicker
            aria-label="mobile picker"
            value={value}
            onChange={newValue => {
              setValue(newValue)
            }}
            slotProps={{
              textField: {
                id: 'mobile-picker',
              },
            }}
          />
          <DesktopDateTimePicker
            aria-label="desktop picker"
            value={value}
            onChange={newValue => {
              setValue(newValue)
            }}
            slotProps={{
              textField: {
                id: 'desktop-picker',
              },
            }}
          />
          <DateTimePicker
            aria-label="some other picker"
            value={value}
            onChange={newValue => {
              setValue(newValue)
            }}
            slotProps={{
              textField: {
                id: 'some-other-picker',
              },
            }}
            {...args}
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
            disabled
            value={value}
            onChange={newValue => {
              setValue(newValue)
            }}
            {...args}
          />
          <DateTimePicker
            readOnly
            value={value}
            onChange={newValue => {
              setValue(newValue)
            }}
            {...args}
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
            value={value}
            onChange={newValue => {
              setValue(newValue)
            }}
            minDateTime={new Date('2021-01-01T12:34:00.000Z')}
            {...args}
          />
          <DateTimePicker
            value={value}
            onChange={newValue => {
              setValue(newValue)
            }}
            minDate={new Date('2020-02-14')}
            minTime={new Date(0, 0, 0, 8)}
            maxTime={new Date(0, 0, 0, 18, 45)}
            {...args}
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

export const StaticMode = story<StaticDateTimePickerProps<Date>>(
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
          {...args}
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
            openTo="hours"
            value={value}
            onChange={newValue => {
              setValue(newValue)
            }}
            minDate={new Date('2018-01-01')}
            slots={{
              leftArrowIcon: AlarmIcon,
              rightArrowIcon: SnoozeIcon,
              openPickerIcon: ClockIcon,
            }}
            minTime={new Date(0, 0, 0, 9)}
            maxTime={new Date(0, 0, 0, 20)}
            slotProps={{
              textField: {
                helperText: 'Hardcoded helper text',
              },
            }}
            {...args}
          />
          <MobileDateTimePicker
            value={value}
            onChange={newValue => {
              setValue(newValue)
            }}
            label="With error handler"
            // eslint-disable-next-line no-console
            onError={console.log}
            // eslint-enable-next-line no-console
            minDate={new Date('2018-01-01T00:00')}
            format="yyyy/MM/dd hh:mm a"
          />
          <DateTimePicker
            value={clearedDate}
            onChange={newValue => setClearedDate(newValue)}
            slotProps={{
              textField: {
                helperText: 'Clear Initial State',
              },
            }}
            {...args}
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
