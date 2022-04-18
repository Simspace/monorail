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
          backgroundColor: theme.palette.primary[200],
        },
      }),
    },
  }
