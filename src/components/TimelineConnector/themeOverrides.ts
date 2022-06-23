import { Components, Theme } from '@mui/material'

export const MonorailTimelineConnectorOverrides: Components<Theme>['MuiTimelineConnector'] =
  {
    defaultProps: {},
    styleOverrides: {
      root: ({ theme }) => ({
        backgroundColor: theme.palette.divider,
      }),
    },
  }
