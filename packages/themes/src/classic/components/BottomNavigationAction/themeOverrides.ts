import type { Components, Theme } from '@mui/material'
import { bottomNavigationActionClasses } from '@mui/material'

export const MonorailBottomNavigationActionOverrides: Components<Theme>['MuiBottomNavigationAction'] =
  {
    defaultProps: {},
    styleOverrides: {
      label: ({ theme }) => ({
        [`&.${bottomNavigationActionClasses.selected}`]: {
          ...theme.typography.bottomNavActiveLabel,
        },
      }),
    },
  }
