import type { Components, Theme } from '@mui/material'

export const MonorailCardOverrides: Components<Theme>['MuiCard'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ ownerState: { raised = false }, theme }) => ({
      boxShadow: raised ? theme.shadows[8] : theme.shadows[4],
    }),
  },
}
