import { Components, listItemButtonClasses, Theme } from '@mui/material'

export const MonorailListItemButtonOverrides: Components<Theme>['MuiListItemButton'] =
  {
    defaultProps: {},
    styleOverrides: {
      root: ({ theme }) => ({
        [`&.${listItemButtonClasses.selected}`]: {
          backgroundColor: theme.palette.action.selected,
        },
        [`&.${listItemButtonClasses.focusVisible}`]: {
          boxShadow: `0 0 0 4px ${theme.palette.primary.focusRing.outer}`,
          outline: `1px solid ${theme.palette.primary.focusRing.inner}`,
          backgroundColor: 'inherit',
          borderRadius: 3,
        },
        '&:active': {
          // TODO: Tokenize this as weak.active
          backgroundColor: theme.palette.primary.shades[200],
        },
      }),
    },
  }
