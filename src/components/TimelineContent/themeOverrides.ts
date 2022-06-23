import { Components, Theme } from '@mui/material'

export const MonorailTimelineContentOverrides: Components<Theme>['MuiTimelineContent'] =
  {
    defaultProps: {},
    styleOverrides: {
      root: ({ theme }) => ({
        padding: theme.spacing(1.5, 2),
      }),
    },
  }
