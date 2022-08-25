import type { Components, Theme } from '@mui/material'
import { tabsClasses } from '@mui/material'

export const MonorailTabsOverrides: Components<Theme>['MuiTabs'] = {
  defaultProps: {},
  styleOverrides: {
    indicator: {
      height: 3,
      borderRadius: `3px 3px 0 0`,
    },
    vertical: {
      [`& .${tabsClasses.indicator}`]: {
        borderRadius: `3px 0 0 3px`,
      },
    },
  },
}
