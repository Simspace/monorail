import type { Components, Theme } from '@mui/material'
import { pickersDayClasses } from '@mui/x-date-pickers-pro'

export const MonorailPickersDayOverrides: Components<Theme>['MuiPickersDay'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => {
      const BORDER_RADIUS = theme.shape.borderRadius
      const classes = {
        selectedDay: `&.${pickersDayClasses.selected}`,
        defaultDay: `&.${pickersDayClasses.root}`,
        disabledDay: `&.${pickersDayClasses.disabled}`,
      }

      return {
        [classes.defaultDay]: {
          borderRadius: BORDER_RADIUS,
          /* height: theme.spacing(8),
          width: theme.spacing(8),
          margin: 0, */
        },
        [classes.selectedDay]: {
          borderRadius: BORDER_RADIUS,
          backgroundColor: theme.palette.secondary.light,
          color: theme.palette.default.dark,
          ['&:hover']: {
            backgroundColor: theme.palette.secondary.main,
          },
          ['&:focus']: {
            backgroundColor: theme.palette.secondary.main,
          },
        },
        [classes.disabledDay]: {
          [`&:not(.${pickersDayClasses.selected})`]: {
            color: theme.palette.primary.dark,
            ['&:hover']: {
              backgroundColor: theme.palette.action.hover,
            },
          },
        },
      }
    },
  },
}
