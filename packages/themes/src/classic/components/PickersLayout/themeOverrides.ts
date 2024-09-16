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
        const BORDER_RADIUS = theme.shape.borderRadius
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

          /** Days styles */
          [`& .${pickersDayClasses.root}`]: {
            height: theme.spacing(8),
            width: theme.spacing(8),
            margin: 0,
            borderRadius: BORDER_RADIUS,

            /** Selected day */
            [`&.${pickersDayClasses.selected}`]: {
              backgroundColor: theme.palette.secondary.light,
              color: theme.palette.default.dark,
              ['&:hover']: {
                backgroundColor: theme.palette.secondary.main,
              },
              ['&:focus']: {
                backgroundColor: theme.palette.secondary.main,
              },
            },

            /** Disabled days */
            [`&.${pickersDayClasses.disabled}`]: {
              color: theme.palette.primary.dark,
              ['&:hover']: {
                backgroundColor: theme.palette.action.hover,
              },
            },
          },
          [`& .${pickersCalendarHeaderClasses.label}`]: {
            whiteSpace: 'nowrap',
          },
        }
      },
    },
  }
