import type { Components, Theme } from '@mui/material'
import { alpha, listItemButtonClasses } from '@mui/material'

export const MonorailListItemButtonOverrides: Components<Theme>['MuiListItemButton'] =
  {
    defaultProps: {},
    styleOverrides: {
      root: ({ theme }) => ({
        [`&.${listItemButtonClasses.selected}`]: {
          backgroundColor: theme.palette.action.selected,
          [`&.${listItemButtonClasses.focusVisible}`]: {
            backgroundColor: theme.palette.action.selected,
            '&:hover': {
              backgroundColor: alpha(
                theme.palette.primary.main,
                theme.palette.action.selectedOpacity +
                  theme.palette.action.hoverOpacity,
              ),
            },
          },
        },
        [`&.${listItemButtonClasses.focusVisible}`]: {
          boxShadow: `0 0 0 4px ${theme.palette.primary.focusRing.outer}`,
          outline: `1px solid ${theme.palette.primary.focusRing.inner}`,
          backgroundColor: 'inherit',
          borderRadius: 3,
        },
        '&:active': {
          backgroundColor: theme.palette.primary.lowEmphasis.active,
        },
      }),
    },
  }
