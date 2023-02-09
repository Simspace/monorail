import type { Components, Theme } from '@mui/material'

export const MonorailListItemOverrides: Components<Theme>['MuiListItem'] = {
  defaultProps: {},
  styleOverrides: {
    padding: ({ theme }) => ({
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    }),
  },
}
