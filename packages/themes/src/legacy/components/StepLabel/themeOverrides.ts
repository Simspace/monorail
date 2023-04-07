import type { Components, Theme } from '@mui/material'
import { stepLabelClasses } from '@mui/material'

export const MonorailStepLabelOverrides: Components<Theme>['MuiStepLabel'] = {
  styleOverrides: {
    root: ({ theme }) => {
      return {
        [`&.${stepLabelClasses.completed}`]: {
          color: theme.palette.text.primary,
        },
        [`&.${stepLabelClasses.alternativeLabel}`]: {
          textAlign: 'center',
          ...theme.typography.caption,
        },
        [`&.${stepLabelClasses.vertical}`]: {
          padding: theme.spacing(4, 0),
        },
      }
    },
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
        [`&.${stepLabelClasses.disabled}`]: {},
      }
    },
    labelContainer: ({ theme }) => ({
      // Default styles if a string is provided to the optional prop
      ...theme.typography.caption,
      color: theme.palette.text.disabled,
      [`.${stepLabelClasses.active} + &`]: {
        color: theme.palette.text.primary,
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
