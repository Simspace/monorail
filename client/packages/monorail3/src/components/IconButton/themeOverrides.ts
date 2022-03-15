import { Components, Theme } from '@mui/material'

export const MonorailIconButtonOverrides: Components<Theme>['MuiIconButton'] = {
  defaultProps: {},
  styleOverrides: {
    root: {},
    sizeSmall: {
      height: 32,
      width: 32,
    },
    sizeMedium: {
      height: 40,
      width: 40,
    },
    sizeLarge: {
      height: 56,
      width: 56,
    },
  },
}
