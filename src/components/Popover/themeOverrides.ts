import { Components, Theme } from '@mui/material'

export const MonorailPopoverOverrides: Components<Theme>['MuiPopover'] = {
  styleOverrides: {
    root: ({ theme }) => {
      return {
        margin: theme.spacing(4, 0),
      }
    },
  },
}
