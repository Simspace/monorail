import { Components, listItemButtonClasses, Theme } from '@mui/material'

export const MonorailListItemButtonOverrides: Components<Theme>['MuiListItemButton'] =
  {
    defaultProps: {},
    styleOverrides: {
      root: ({ theme }) => ({
        [`&.${listItemButtonClasses.selected}`]: {
          backgroundColor: theme.palette.action.selected,
        },
        '&:active': {
          // TODO: Tokenize this as weak.active
          backgroundColor: theme.palette.primary.shades[200],
        },
      }),
    },
  }
