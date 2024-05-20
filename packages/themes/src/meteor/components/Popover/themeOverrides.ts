import type { Components, Theme } from '@mui/material'

export const MonorailPopoverOverrides: Components<Theme>['MuiPopover'] = {
  defaultProps: {
    elevation: 6, // Also applies to Menu and Select
  },
  styleOverrides: {
    paper: ({ theme }) => {
      return {
        margin: theme.spacing(2, 0),
      }
    },
  },
}
