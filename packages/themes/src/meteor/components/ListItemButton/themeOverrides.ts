import { alpha, Components, Theme } from '@mui/material'
import { listItemButtonClasses } from '@mui/material'

export const MonorailListItemButtonOverrides: Components<Theme>['MuiListItemButton'] =
  {
    defaultProps: {},
    styleOverrides: {
      root: ({ theme }) => ({
        transition: theme.transitions.create(
          ['box-shadow', 'background-color'],
          {
            duration: theme.transitions.duration.shortest,
          },
        ),
        [`&.${listItemButtonClasses.focusVisible}`]: {
          boxShadow: `inset 0 0 0 2px ${theme.palette.default.focusRing.inner}`,
          backgroundColor: 'inherit',
          borderRadius: 3,
        },
        '&:hover': {
          backgroundColor: theme.palette.action.hover,
        },
        '&:active': {
          backgroundColor: theme.palette.action.active,
        },
        [`&.${listItemButtonClasses.selected}`]: {
          backgroundColor: theme.palette.action.selected,
          '&:hover': {
            backgroundColor: alpha(
              theme.palette.grey[100],
              theme.palette.action.selectedOpacity +
                theme.palette.action.hoverOpacity,
            ),
          },
        },
      }),
    },
  }
