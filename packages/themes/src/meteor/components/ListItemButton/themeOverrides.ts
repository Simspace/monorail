import type { Components, Theme } from '@mui/material'
import { listItemButtonClasses } from '@mui/material'

export const MonorailListItemButtonOverrides: Components<Theme>['MuiListItemButton'] =
  {
    defaultProps: {},
    styleOverrides: {
      root: ({ theme }) => ({
        '&::before': {
          content: '""',
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          backgroundColor: 'transparent',
          transition: theme.transitions.create(['background-color'], {
            duration: theme.transitions.duration.shortest,
          }),
        },
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
          '&:active': {
            backgroundColor: theme.palette.action.active,
          },
          backgroundColor: theme.palette.action.selected,
          '&:hover': {
            backgroundColor: theme.palette.action.selected,
            '&::before': {
              backgroundColor: theme.palette.action.hover,
            },
          },
        },
      }),
    },
  }
