import type { Components, Theme } from '@mui/material'

export const MonorailTimelineOppositeContentOverrides: Components<Theme>['MuiTimelineOppositeContent'] =
  {
    defaultProps: {},
    styleOverrides: {
      root: ({ theme }) => ({
        padding: theme.spacing(1.5, 2),
      }),
    },
  }
