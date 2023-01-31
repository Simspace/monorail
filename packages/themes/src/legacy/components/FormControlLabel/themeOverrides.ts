import type { Components, Theme } from '@mui/material'

export const MonorailFormControlLabelOverrides: Components<Theme>['MuiFormControlLabel'] =
  {
    defaultProps: {},
    styleOverrides: {
      root: {
        marginLeft: 0,
      },
    },
  }
