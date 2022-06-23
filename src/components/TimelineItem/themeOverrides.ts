import { Components, Theme } from '@mui/material'

export const MonorailTimelineItemOverrides: Components<Theme>['MuiTimelineItem'] =
  {
    defaultProps: {},
    styleOverrides: {
      root: ({ theme }) => ({
        '&::before': {
          padding: theme.spacing(1.5, 2),
        },
      }),
    },
  }
