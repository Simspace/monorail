import type { Components, Theme } from '@mui/material'
import { stepLabelClasses } from '@mui/material'

export const MonorailStepLabelOverrides: Components<Theme>['MuiStepLabel'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      textAlign: 'start',
      color: theme.palette.text.secondary,
      [`&.${stepLabelClasses.alternativeLabel}`]: {
        textAlign: 'center',
      },
      [`&.${stepLabelClasses.vertical}`]: {
        padding: theme.spacing(4, 0),
      },
    }),
    label: ({ theme }) => ({
      ...theme.typography.subtitle1,
      [`&.${stepLabelClasses.completed}`]: {
        fontWeight: theme.typography.subtitle1.fontWeight,
        color: theme.palette.text.secondary,
      },
      [`&.${stepLabelClasses.active}`]: {
        color: theme.palette.text.primary,
        fontWeight: theme.typography.subtitle1.fontWeight,
      },
      [`&.${stepLabelClasses.error}`]: {
        color: theme.palette.error.main,
      },
      [`&.${stepLabelClasses.disabled}`]: {
        color: theme.palette.text.disabled,
      },
    }),
    labelContainer: ({ theme }) => ({
      // Default styles if a string is provided to the optional prop
      ...theme.typography.subtitle2,
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
