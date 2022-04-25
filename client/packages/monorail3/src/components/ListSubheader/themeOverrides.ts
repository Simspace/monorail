import { Components, Theme } from '@mui/material'

export const MonorailListSubheaderOverrides: Components<Theme>['MuiListSubheader'] =
  {
    defaultProps: {},
    styleOverrides: {
      root: {
        lineHeight: '32px',
        backgroundColor: 'transparent',
      },
    },
  }
