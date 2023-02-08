import type { Components, Theme } from '@mui/material'

export const MonorailListOverrides: Components<Theme>['MuiList'] = {
  defaultProps: {},
  styleOverrides: {
    padding: ({ theme }) => ({
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    }),
  },
}
