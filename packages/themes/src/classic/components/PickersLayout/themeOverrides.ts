import { type Components, dividerClasses, type Theme } from '@mui/material'
import {
  multiSectionDigitalClockSectionClasses,
  pickersCalendarHeaderClasses,
  pickersDayClasses,
  pickersLayoutClasses,
} from '@mui/x-date-pickers-pro'

export const MonorailPickersLayoutOverrides: Components<Theme>['MuiPickersLayout'] =
  {
    defaultProps: {},
    styleOverrides: {
      root: ({ theme }) => {
        return {
          '&': {
            padding: theme.spacing(4),
          },
          [`& .${pickersLayoutClasses.actionBar}`]: {
            padding: 0,
            height: 'auto',
          },
          [`& .${dividerClasses.root}`]: {
            display: 'none',
          },
          [`& .${multiSectionDigitalClockSectionClasses.root}`]: {
            width: 'auto',
            padding: theme.spacing(1),
          },
          [`& .${pickersDayClasses.root}`]: {
            height: 32,
            width: 32,
            margin: 0,
          },
          [`& .${pickersCalendarHeaderClasses.label}`]: {
            whiteSpace: 'nowrap',
          },
        }
      },
    },
  }
