import type { Components, Theme } from '@mui/material'
import { outlinedInputClasses } from '@mui/material'

export const MonorailInputAdornmentOverrides: Components<Theme>['MuiInputAdornment'] =
  {
    defaultProps: {},
    styleOverrides: {
      root: ({ theme }) => ({
        color: theme.palette.default.main,
        [`.${outlinedInputClasses.disabled} & > *`]: {
          color: theme.palette.text.disabled,
        },
      }),
    },
  }
