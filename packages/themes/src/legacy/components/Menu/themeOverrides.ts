import type { Components, Theme } from '@mui/material'

export const MonorailMenuOverrides: Components<Theme>['MuiMenu'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    }),
  },
}
