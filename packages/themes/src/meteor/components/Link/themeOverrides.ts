import type { Components, Theme } from '@mui/material'

export const MonorailLinkOverrides: Components<Theme>['MuiLink'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      color: theme.palette.info.main,
      textDecorationColor: theme.palette.info.border.main,
    }),
  },
}
