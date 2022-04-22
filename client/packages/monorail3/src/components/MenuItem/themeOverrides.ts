import { Components, menuItemClasses, Theme } from '@mui/material'

export const MonorailMenuItemOverrides: Components<Theme>['MuiMenuItem'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      paddingTop: 12,
      paddingBottom: 12,
      '&:active': {
        backgroundColor: theme.palette.primary[200],
      },
      [`&.${menuItemClasses.selected}`]: {
        backgroundColor: theme.palette.action.selected,
      },
    }),
    dense: {
      paddingTop: 4,
      paddingBottom: 4,
    },
  },
}
