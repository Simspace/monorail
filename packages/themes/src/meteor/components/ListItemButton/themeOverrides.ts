import type { Components, Theme } from '@mui/material'
import { listItemButtonClasses } from '@mui/material'

export const MonorailListItemButtonOverrides: Components<Theme>['MuiListItemButton'] =
  {
    defaultProps: {},
    styleOverrides: {
      root: ({ theme }) => ({
        paddingTop: 0,
        paddingBottom: 0,
        [`&.${listItemButtonClasses.focusVisible}`]: {
          boxShadow: `0 0 0 4px ${theme.palette.primary.focusRing.outer}`,
          outline: `1px solid ${theme.palette.primary.focusRing.inner}`,
          backgroundColor: 'inherit',
          borderRadius: 3,
        },
        '&:active': {
          backgroundColor: theme.palette.action.active,
        },
      }),
    },
  }
