import type { Components, Theme } from '@mui/material'

export const MonorailDrawerOverrides: Components<Theme>['MuiDrawer'] = {
  defaultProps: {
    elevation: 4,
  },
  styleOverrides: {},
}
