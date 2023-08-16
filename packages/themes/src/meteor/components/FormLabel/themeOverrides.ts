import type { Components, Theme } from '@mui/material'
import { formLabelClasses } from '@mui/material'

export const MonorailFormLabelOverrides: Components<Theme>['MuiFormLabel'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      ...theme.typography.inputLabel,
      position: 'relative',
      left: theme.spacing(3),
      [`&.${formLabelClasses.error}`]: {
        color: theme.palette.error.lowEmphasis.contrastText,
      },
    }),
  },
}
