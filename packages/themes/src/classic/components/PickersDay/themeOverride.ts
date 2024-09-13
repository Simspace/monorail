import type { Components, Theme } from '@mui/material'
import { pickersDayClasses } from '@mui/x-date-pickers-pro'

export const MonorailPickersDayOverrides: Components<Theme>['MuiPickersDay'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => {
      const BORDER_RADIUS = theme.shape.borderRadius
      const classes = {
        selectedDay: `&.${pickersDayClasses.selected}`,
        unselectedDay: `&.${pickersDayClasses.root}`,
        disabledDay: `&.${pickersDayClasses.disabled}`,
      }

      return {
        [classes.unselectedDay]: {
          borderRadius: BORDER_RADIUS, // TODO: confirm with UX the border radius on over
        },
        [classes.selectedDay]: {
          borderRadius: BORDER_RADIUS,
          backgroundColor: theme.palette.secondary.light,
          color: theme.palette.default.dark,
          ['&:hover']: {
            backgroundColor: theme.palette.secondary.main, // TODO: confirm with UX the over color
          },
          ['&:focus']: {
            backgroundColor: theme.palette.secondary.main, // TODO: config with UX the focus color
          },
        },
        [classes.disabledDay]: {
          [`&:not(.${pickersDayClasses.selected})`]: {
            color: theme.palette.primary.dark,
          },
        },
      }
    },
  },
}
