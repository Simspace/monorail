import type { Components, Theme } from '@mui/material'
import { stepLabelClasses } from '@mui/material'

export const MonorailStepLabelOverrides: Components<Theme>['MuiStepLabel'] = {
  styleOverrides: {
    alternativeLabel: ({ theme }) => ({
      textAlign: 'center',
      ...theme.typography.caption,
    }),
    vertical: ({ theme }) => ({
      padding: theme.spacing(3, 0),
    }),
    active: ({ theme }) => {
      return {
        color: theme.palette.text.primary,
      }
    },
    label: ({ theme }) => {
      return {
        ...theme.typography.subtitle1,
        color: theme.palette.text.disabled,
        [`&.${stepLabelClasses.completed}`]: {
          color: theme.palette.text.primary,
        },
      }
    },
    labelContainer: ({ theme }) => ({
      // Default styles if a string is provided to the optional prop
      ...theme.typography.caption,
      color: theme.palette.text.disabled,
      [`.${stepLabelClasses.active} + &`]: {
        color: theme.palette.text.primary,
      },
      [`.${stepLabelClasses.completed} + &`]: {
        color: theme.palette.text.secondary,
      },
      [`.${stepLabelClasses.error} + &`]: {
        color: theme.palette.error.main,
      },
      [`.${stepLabelClasses.disabled} + &`]: {
        color: theme.palette.text.disabled,
      },
    }),
  },
}
