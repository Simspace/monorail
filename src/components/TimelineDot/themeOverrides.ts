import { Components, Theme } from '@mui/material'

export const MonorailTimelineDotOverrides: Components<Theme>['MuiTimelineDot'] =
  {
    defaultProps: {},
    styleOverrides: {
      root: {
        padding: 6,
        margin: '9.5px 0',
      },
    },
  }
