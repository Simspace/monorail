import { Components, Theme } from '@mui/material'

export const MonorailListSubheaderOverrides: Components<Theme>['MuiListSubheader'] =
  {
    defaultProps: {},
    styleOverrides: {
      root: ({ theme }) => ({
        lineHeight: theme.typography.pxToRem(32),
        backgroundColor: 'transparent',
      }),
    },
  }
