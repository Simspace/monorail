// Edit this file to add new stories
import React from 'react'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import { action } from '@storybook/addon-actions'
import {
  endOfWeek,
  getDaysInMonth,
  isSameDay,
  isWeekend,
  isWithinInterval,
  startOfWeek,
} from 'date-fns'
import deLocale from 'date-fns/locale/de'
import enLocale from 'date-fns/locale/en-US'
import frLocale from 'date-fns/locale/fr'
import ruLocale from 'date-fns/locale/ru'

import { story } from '../../../__tests__/helpers/storybook'
import { styled } from '../../../helpers/styles'
import { Badge } from '../../Badge/Badge'
import { Box } from '../../Box/Box'
import { CalendarPickerSkeleton } from '../../CalendarPickerSkeleton/CalendarPickerSkeleton'
import { DesktopDatePicker } from '../../DesktopDatePicker/DesktopDatePicker'
import { MobileDatePicker } from '../../MobileDatePicker/MobileDatePicker'
import { PickersDay, PickersDayProps } from '../../PickersDay/PickersDay'
import { Stack } from '../../Stack/Stack'
import { StaticDatePicker } from '../../StaticDatePicker/StaticDatePicker'
import { TextField, TextFieldProps } from '../../TextField/TextField'
import { ToggleButton } from '../../ToggleButton/ToggleButton'
import { ToggleButtonGroup } from '../../ToggleButtonGroup/ToggleButtonGroup'
import { DatePicker, DatePickerProps } from '../DatePicker'
import { defaultStoryMeta } from './DatePicker.stories.gen'
/**
 * Metadata for DatePicker stories - update/extend as needed
 */
export default {
  ...defaultStoryMeta,
  title: 'Inputs/Date and Time/Date/DatePicker',
}

/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<DatePickerProps<Date>>(args => {
  const [value, setValue] = React.useState<Date | null>(null)

  return (
    <DatePicker
      value={value}
      onChange={newValue => {
        setValue(newValue)
        action('onChange')
      }}
      renderInput={(params: TextFieldProps) => <TextField {...params} />}
      {...args}
    />
  )
})

export const Default = story(Template, {
  parameters: {
    docs: {
      description: {
        component: `The date picker is rendered as a modal dialog on mobile, and a textbox with a popup on desktop.`,
      },
    },
  },
})

export const StaticMode = story<DatePickerProps<Date>>(
  () => {
    const [value, setValue] = React.useState<Date | null>(
      new Date('2021-01-01T12:34:00.000Z'),
    )

    return (
      <StaticDatePicker
        displayStaticWrapperAs="desktop"
        openTo="year"
        value={value}
        onChange={newValue => {
          setValue(newValue)
        }}
        renderInput={params => <TextField {...params} />}
      />
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `It's possible to render any date picker without the modal/popover and text field. This can be helpful when building custom popover/modal containers.`,
        },
      },
    },
  },
)

export const Responsiveness = story<DatePickerProps<Date>>(
  () => {
    const [value, setValue] = React.useState<Date | null>(
      new Date('2021-01-01T12:34:00.000Z'),
    )

    return (
      <Stack spacing={3}>
        <MobileDatePicker
          aria-label="for mobile"
          label="For mobile"
          value={value}
          onChange={newValue => {
            setValue(newValue)
          }}
          renderInput={params => <TextField {...params} />}
        />
        <DesktopDatePicker
          aria-label="for desktop"
          label="For desktop"
          value={value}
          minDate={new Date('2017-01-01')}
          onChange={newValue => {
            setValue(newValue)
          }}
          renderInput={params => <TextField id="desktop" {...params} />}
        />
        <DatePicker
          disableFuture
          label="Responsive"
          openTo="year"
          views={['year', 'month', 'day']}
          value={value}
          onChange={newValue => {
            setValue(newValue)
          }}
          renderInput={params => <TextField {...params} />}
        />
      </Stack>
    )
  },
  {
    parameters: {
      docs: {
        inlineStories: false,
        //@ts-ignore
        iframeHeight: 600,
        description: {
          story: `The date picker component is designed and optimized for the device it runs on.

- The MobileDatePicker component works best for touch devices and small screens.
- The DesktopDatePicker component works best for mouse devices and large screens.

By default, the DatePicker component renders the desktop version if the media query @media (pointer: fine) matches. This can be customized with the desktopModeMediaQuery prop.`,
        },
      },
    },
  },
)

export const FormProps = story<DatePickerProps<Date>>(
  () => {
    const [value, setValue] = React.useState<Date | null>(null)

    return (
      <Stack spacing={3}>
        <DatePicker
          label="disabled"
          disabled
          value={value}
          onChange={newValue => {
            setValue(newValue)
          }}
          renderInput={params => <TextField {...params} />}
        />
        <DatePicker
          label="read-only"
          readOnly
          value={value}
          onChange={newValue => {
            setValue(newValue)
          }}
          renderInput={params => <TextField {...params} />}
        />
      </Stack>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `The date picker component can be disabled or read-only.`,
        },
      },
    },
  },
)

type Locale = 'fr' | 'en' | 'ru' | 'de'

export const Localization = story<DatePickerProps<Date>>(
  () => {
    const localeMap = {
      en: enLocale,
      fr: frLocale,
      ru: ruLocale,
      de: deLocale,
    }

    const maskMap = {
      fr: '__/__/____',
      en: '__/__/____',
      ru: '__.__.____',
      de: '__.__.____',
    }

    const [locale, setLocale] = React.useState<keyof typeof maskMap>('ru')

    const [value, setValue] = React.useState<Date | null>(
      new Date('2021-01-01T12:34:00.000Z'),
    )

    const selectLocale = (newLocale: Locale) => {
      setLocale(newLocale)
    }

    return (
      <LocalizationProvider
        dateAdapter={AdapterDateFns}
        locale={localeMap[locale]}
      >
        <div>
          <ToggleButtonGroup
            value={locale}
            exclusive
            sx={{ mb: 2, display: 'block' }}
          >
            {Object.keys(localeMap).map(localeItem => (
              <ToggleButton
                key={localeItem}
                value={localeItem}
                onClick={() => selectLocale(localeItem as Locale)}
              >
                {localeItem}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
          <DatePicker
            mask={maskMap[locale]}
            value={value}
            onChange={newValue => setValue(newValue)}
            renderInput={params => <TextField {...params} />}
          />
        </div>
      </LocalizationProvider>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `Use LocalizationProvider to change the date-engine locale that is used to render the date picker. Here is an example of changing the locale for the date-fns adapter:`,
        },
      },
    },
  },
)

export const ViewsPlayground = story<DatePickerProps<Date>>(
  () => {
    const [value, setValue] = React.useState<Date | null>(
      new Date('2021-01-01T12:34:00.000Z'),
    )

    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack spacing={3}>
          <DatePicker
            views={['year']}
            label="Year only"
            value={value}
            onChange={newValue => {
              setValue(newValue)
            }}
            renderInput={params => <TextField {...params} helperText={null} />}
          />
          <DatePicker
            views={['year', 'month']}
            label="Year and Month"
            minDate={new Date('2012-03-01')}
            maxDate={new Date('2023-06-01')}
            value={value}
            onChange={newValue => {
              setValue(newValue)
            }}
            renderInput={params => <TextField {...params} helperText={null} />}
          />
          <DatePicker
            openTo="year"
            views={['year', 'month', 'day']}
            label="Year, month and date"
            value={value}
            onChange={newValue => {
              setValue(newValue)
            }}
            renderInput={params => <TextField {...params} helperText={null} />}
          />
          <DatePicker
            views={['day', 'month', 'year']}
            label="Invert the order of views"
            value={value}
            onChange={newValue => {
              setValue(newValue)
            }}
            renderInput={params => <TextField {...params} helperText={null} />}
          />
          <DatePicker
            views={['day']}
            label="Just date"
            value={value}
            onChange={newValue => {
              setValue(newValue)
            }}
            renderInput={params => <TextField {...params} helperText={null} />}
          />
        </Stack>
      </LocalizationProvider>
    )
  },
  {
    parameters: {
      docs: {
        inlineStories: false,
        // @ts-ignore
        iframeHeight: 600,
        description: {
          story: `It's possible to combine year, month, and date selection views. Views will appear in the order they're included in the views array.`,
        },
      },
    },
  },
)

export const LandscapeOrientation = story<DatePickerProps<Date>>(
  () => {
    const [value, setValue] = React.useState<Date | null>(
      new Date('2021-01-01T12:34:00.000Z'),
    )

    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StaticDatePicker<Date>
          orientation="landscape"
          openTo="day"
          value={value}
          shouldDisableDate={isWeekend}
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
          story: `For ease of use, the date picker will automatically change the layout between portrait and landscape by subscription to the window.orientation change. You can force a specific layout using the orientation prop.`,
        },
      },
    },
  },
)

export const CustomInputComponent = story<DatePickerProps<Date>>(
  () => {
    const [value, setValue] = React.useState<Date | null>(
      new Date('2021-01-01T12:34:00.000Z'),
    )

    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          label="Custom input"
          value={value}
          onChange={newValue => {
            setValue(newValue)
          }}
          renderInput={({ inputRef, inputProps, InputProps }) => (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <input aria-label="input" ref={inputRef} {...inputProps} />
              {InputProps?.endAdornment}
            </Box>
          )}
        />
      </LocalizationProvider>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `You can customize the rendering of the input with the renderInput prop. Make sure to spread ref and inputProps correctly to the custom input component.`,
        },
      },
    },
  },
)

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

export const CustomizedDayRendering = story<DatePickerProps<Date>>(
  () => {
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
        />
      )
    }

    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
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
      </LocalizationProvider>
    )
  },
  {
    parameters: {
      a11y: { disable: true }, // MUI component is violating a11y rule; revisit when datepickers are out of lab
      docs: {
        description: {
          story: `You can customize the rendering of the input with the renderInput prop. Make sure to spread ref and inputProps correctly to the custom input component.`,
        },
      },
    },
  },
)

function getRandomNumber(min: number, max: number) {
  return Math.round(Math.random() * (max - min) + min)
}

/**
 * Mimic fetch with abort controller https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort
 * ⚠️ No IE11 support
 */
function fakeFetch(date: Date, { signal }: { signal: AbortSignal }) {
  return new Promise<{ daysToHighlight: Array<number> }>((resolve, reject) => {
    const timeout = setTimeout(() => {
      const daysInMonth = getDaysInMonth(date)
      const daysToHighlight = [1, 2, 3].map(() =>
        getRandomNumber(1, daysInMonth),
      )

      resolve({ daysToHighlight })
    }, 500)

    signal.onabort = () => {
      clearTimeout(timeout)
      reject(new DOMException('aborted', 'AbortError'))
    }
  })
}

const initialValue = new Date('2021-01-01T12:34:00.000Z')

export const DynamicData = story<DatePickerProps<Date>>(
  () => {
    const requestAbortController = React.useRef<AbortController | null>(null)
    const [isLoading, setIsLoading] = React.useState(false)
    const [highlightedDays, setHighlightedDays] = React.useState([1, 2, 15])
    const [value, setValue] = React.useState<Date | null>(initialValue)

    const fetchHighlightedDays = (date: Date) => {
      const controller = new AbortController()
      fakeFetch(date, {
        signal: controller.signal,
      })
        .then(({ daysToHighlight }) => {
          setHighlightedDays(daysToHighlight)
          setIsLoading(false)
        })
        .catch((error: Error) => {
          // ignore the error if it's caused by `controller.abort`
          if (error.name !== 'AbortError') {
            throw error
          }
        })

      requestAbortController.current = controller
    }

    React.useEffect(() => {
      fetchHighlightedDays(initialValue)
      // abort request on unmount
      return () => requestAbortController.current?.abort()
    }, [])

    const handleMonthChange = (date: Date) => {
      if (requestAbortController.current) {
        // make sure that you are aborting useless requests
        // because it is possible to switch between months pretty quickly
        requestAbortController.current.abort()
      }

      setIsLoading(true)
      setHighlightedDays([])
      fetchHighlightedDays(date)
    }

    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          value={value}
          loading={isLoading}
          onChange={newValue => {
            setValue(newValue)
          }}
          onMonthChange={handleMonthChange}
          renderInput={params => <TextField {...params} />}
          renderLoading={() => <CalendarPickerSkeleton />}
          renderDay={(day, _value, DayComponentProps) => {
            const isSelected =
              !DayComponentProps.outsideCurrentMonth &&
              highlightedDays.indexOf(day.getDate()) > 0

            return (
              <Badge
                key={day.toString()}
                overlap="circular"
                badgeContent={isSelected ? '🌚' : undefined}
              >
                <PickersDay {...DayComponentProps} />
              </Badge>
            )
          }}
        />
      </LocalizationProvider>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `Sometimes it may be necessary to display additional info right in the calendar. Here's an example of prefetching and displaying server-side data using the onMonthChange, loading, and renderDay props.`,
        },
      },
    },
  },
)

export const HelperText = story<DatePickerProps<Date>>(
  () => {
    const [value, setValue] = React.useState<Date | null>(null)

    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Helper text example"
          value={value}
          onChange={newValue => {
            setValue(newValue)
          }}
          renderInput={params => (
            <TextField
              {...params}
              helperText={params?.inputProps?.placeholder}
            />
          )}
        />
      </LocalizationProvider>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `You can show a helper text with the date format accepted.`,
        },
      },
    },
  },
)
