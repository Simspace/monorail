import type { Components, Theme } from '@mui/material'

export const MonorailCssBaselineOverrides: Components<Theme>['MuiCssBaseline'] =
  {
    styleOverrides: {
      ':root': {
        fontSize: '12px',
      },
    },
  }
