import type { Components, Theme } from '@mui/material'
import { listItemButtonClasses } from '@mui/material'

export const MonorailListItemButtonOverrides: Components<Theme>['MuiListItemButton'] =
  {
    defaultProps: {},
    styleOverrides: {
      root: ({ theme }) => ({
        transition: theme.transitions.create('box-shadow', {
          duration: theme.transitions.duration.shortest,
        }),
        [`&.${listItemButtonClasses.focusVisible}`]: {
          boxShadow: `0 0 0 2px ${theme.palette.default.focusRing.inner}`,
          backgroundColor: 'inherit',
          borderRadius: 3,
        },
        '&:hover': {
          backgroundColor: theme.palette.action.hover,
        },
        '&:active': {
          backgroundColor: theme.palette.action.active,
        },
      }),
    },
  }
