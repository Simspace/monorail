import type { Components, Theme } from '@mui/material'
import {
  dateCalendarClasses,
  pickersCalendarHeaderClasses,
} from '@mui/x-date-pickers-pro'

export const MonorailDateCalendarOverrides: Components<Theme>['MuiDateCalendar'] =
  {
    defaultProps: {},
    styleOverrides: {
      root: ({ theme }) => {
        return {
          '&': {
            width: theme.spacing(58),
            padding: 0,
          },
          [`& .${dateCalendarClasses.viewTransitionContainer}`]: {
            width: theme.spacing(56),
            // paddingX: theme.spacing(4),
          },
          [`& .${pickersCalendarHeaderClasses.root}`]: {
            padding: 0,
            marginBottom: theme.spacing(4),
            marginTop: 0,
          },
        }
      },
    },
  }
