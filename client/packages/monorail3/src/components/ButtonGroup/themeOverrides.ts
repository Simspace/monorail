import { Components, Theme } from '@mui/material'

export const MonorailButtonGroupOverrides: Components<Theme>['MuiButtonGroup'] =
  {
    defaultProps: {
      disableRipple: true,
      disableElevation: true,
    },
    // styleOverrides: {}
  }
