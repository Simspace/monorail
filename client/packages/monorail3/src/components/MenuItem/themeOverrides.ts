import {
  Components,
  listItemIconClasses,
  listItemTextClasses,
  menuItemClasses,
  Theme,
} from '@mui/material'

export const MonorailMenuItemOverrides: Components<Theme>['MuiMenuItem'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      paddingTop: 12,
      paddingBottom: 12,
      [`& .${listItemIconClasses.root}`]: {
        minWidth: 48,
      },
      '&:active': {
        backgroundColor: theme.palette.primary[200],
      },
      [`&.${menuItemClasses.selected}`]: {
        backgroundColor: theme.palette.action.selected,
      },
      [`& .${listItemTextClasses.inset}`]: {
        paddingLeft: 48,
      },
    }),
    dense: {
      paddingTop: 4,
      paddingBottom: 4,
      [`& .${listItemIconClasses.root}`]: {
        minWidth: 40,
      },
      [`& .${listItemTextClasses.inset}`]: {
        paddingLeft: 40,
      },
    },
  },
}
