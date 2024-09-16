import { type Components, dividerClasses, type Theme } from '@mui/material'
import {
  multiSectionDigitalClockSectionClasses,
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
            borderColor: theme.palette.divider,
            /** Hide bottom divider */
            [`&:last-of-type`]: {
              display: 'none',
            },
          },
          [`& .${multiSectionDigitalClockSectionClasses.root}`]: {
            width: 'auto',
            padding: theme.spacing(1),
          },
        }
      },
    },
  }
