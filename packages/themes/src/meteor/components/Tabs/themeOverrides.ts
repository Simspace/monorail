import type { Components, Theme } from '@mui/material'
import { alpha, tabsClasses } from '@mui/material'

export const MonorailTabsOverrides: Components<Theme>['MuiTabs'] = {
  defaultProps: {
    textColor: 'secondary',
    indicatorColor: 'secondary',
  },
  styleOverrides: {
    indicator: {
      height: 3,
      borderRadius: `3px 3px 0 0`,
    },
    scrollButtons: ({
      ownerState: { indicatorColor = 'secondary' },
      theme,
    }) => ({
      color: theme.palette[indicatorColor].main,
      '&:hover': {
        backgroundColor: alpha(
          theme.palette[indicatorColor].main,
          theme.palette.action.hoverOpacity,
        ),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette[indicatorColor].main,
          theme.palette.action.activatedOpacity,
        ),
      },
    }),
    vertical: {
      [`& .${tabsClasses.indicator}`]: {
        borderRadius: `3px 0 0 3px`,
      },
    },
  },
}
