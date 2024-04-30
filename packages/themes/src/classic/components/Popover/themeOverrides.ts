import type { Components, Theme } from '@mui/material'

export const MonorailPopoverOverrides: Components<Theme>['MuiPopover'] = {
  styleOverrides: {
    paper: ({ theme }) => {
      return {
        margin: theme.spacing(2, 0),
      }
    },
  },
}
