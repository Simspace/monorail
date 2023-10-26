import type { Components, Theme } from '@mui/material'

export const MonorailListSubheaderOverrides: Components<Theme>['MuiListSubheader'] =
  {
    defaultProps: {},
    styleOverrides: {
      root: ({ theme }) => ({
        backgroundColor: 'transparent',
        ...theme.typography.listSubheader,
        paddingLeft: theme.spacing(6),
        paddingRight: theme.spacing(2),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }),
    },
  }
