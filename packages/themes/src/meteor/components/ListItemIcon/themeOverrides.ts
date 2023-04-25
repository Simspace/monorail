import type { Components, Theme } from '@mui/material'

export const MonorailListItemIconOverrides: Components<Theme>['MuiListItemIcon'] =
  {
    defaultProps: {},
    styleOverrides: {
      root: ({ theme }) => ({
        color: theme.palette.default.main,
      }),
    },
  }
