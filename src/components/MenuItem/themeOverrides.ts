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
      paddingRight: 24,
      [`&.${menuItemClasses.focusVisible}`]: {
        boxShadow: `0 0 0 4px ${theme.palette.primary.focusRing.outer}`,
        outline: `1px solid ${theme.palette.primary.focusRing.inner}`,
        backgroundColor: 'inherit',
        borderRadius: 3,
      },
      [`& .${listItemIconClasses.root}`]: {
        minWidth: 48,
      },
      '&:active': {
        // TODO: Tokenize this as weak.active
        backgroundColor: theme.palette.primary.shades[200],
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