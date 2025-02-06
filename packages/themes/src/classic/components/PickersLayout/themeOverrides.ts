import { type Components, dividerClasses, type Theme } from '@mui/material'
import {
  dateCalendarClasses,
  multiSectionDigitalClockClasses,
  multiSectionDigitalClockSectionClasses,
  pickersCalendarHeaderClasses,
  pickersDayClasses,
  pickersLayoutClasses,
} from '@mui/x-date-pickers-pro'

export const MonorailPickersLayoutOverrides: Components<Theme>['MuiPickersLayout'] =
  {
    defaultProps: {},
    styleOverrides: {
      root: ({ theme }) => ({
        [`& .${pickersLayoutClasses.actionBar}`]: {
          padding: 0,
          height: 'auto',
        },
        [`& .${dividerClasses.root}`]: {
          display: 'none',
        },

        /** Time section */
        [`& .${multiSectionDigitalClockClasses.root}`]: {
          borderBottom: 'none',
        },
        [`& .${multiSectionDigitalClockSectionClasses.root}`]: {
          width: 'auto',
          padding: theme.spacing(1),

          [`& .${multiSectionDigitalClockSectionClasses.item}`]: {
            borderRadius: 2,

            [`&.Mui-selected`]: {
              ...theme.typography.subtitle2,
              backgroundColor: theme.palette.default.main,
            },
          },
        },

        /** Calendar container */
        [`& .${dateCalendarClasses.root}`]: {
          width: theme.spacing(58),
          padding: 0,

          [`& .${dateCalendarClasses.viewTransitionContainer}`]: {
            width: theme.spacing(56),
          },

          [`& .${pickersCalendarHeaderClasses.label}`]: {
            fontSize: theme.typography.h3.fontSize,
          },

          /** Calendar header */
          [`& .${pickersCalendarHeaderClasses.root}`]: {
            padding: 0,
            marginBottom: theme.spacing(4),
            marginTop: 0,

            [`& .${pickersCalendarHeaderClasses.label}`]: {
              whiteSpace: 'nowrap',
            },
          },
        },

        /** Days styles */
        [`& .${pickersDayClasses.root}`]: {
          height: theme.spacing(8),
          width: theme.spacing(8),
          margin: 0,
          borderRadius: theme.shape.borderRadius,

          [`&:hover`]: {
            backgroundColor: theme.palette.action.hover,
          },

          /** Selected day */
          [`&.${pickersDayClasses.selected}`]: {
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.default.dark,
            ['&:hover']: {
              backgroundColor: theme.palette.primary.main,
            },
            ['&:focus']: {
              backgroundColor: theme.palette.primary.light,
            },
            ...theme.typography.subtitle2,
          },

          /** Disabled days */
          [`&.${pickersDayClasses.disabled}`]: {
            color: theme.palette.primary.dark,
            ['&:hover']: {
              backgroundColor: theme.palette.action.hover,
            },
          },
        },
      }),
    },
  }
