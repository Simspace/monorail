import type { Components, Theme } from '@mui/material'

export const MonorailListOverrides: Components<Theme>['MuiList'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    }),
  },
}
