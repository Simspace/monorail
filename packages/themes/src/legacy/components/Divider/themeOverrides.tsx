import type { Components, Theme } from '@mui/material'

export const MonorailDividerOverrides: Components<Theme>['MuiDivider'] = {
  defaultProps: {},
  styleOverrides: {
    inset: ({ theme }) => ({
      marginLeft: theme.spacing(14),
    }),
  },
}
