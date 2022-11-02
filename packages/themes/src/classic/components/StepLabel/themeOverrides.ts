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
  },
}
