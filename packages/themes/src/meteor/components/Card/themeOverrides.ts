import type { Components, Theme } from '@mui/material'

export const MonorailCardOverrides: Components<Theme>['MuiCard'] = {
  defaultProps: {
    elevation: 2,
  },
  styleOverrides: {
    root: ({ ownerState: { raised = false }, theme }) => ({
      ...(raised && { boxShadow: theme.shadows[8] }),
    }),
  },
}
