import { Components, Theme } from '@mui/material'

export const MonorailListItemIconOverrides: Components<Theme>['MuiListItemIcon'] =
  {
    defaultProps: {},
    styleOverrides: {
      root: {
        minWidth: 48,
        paddingLeft: 8,
      },
    },
  }
