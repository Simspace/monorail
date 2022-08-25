import type { Components, Theme } from '@mui/material'
import {
  listItemIconClasses,
  listItemTextClasses,
  menuItemClasses,
} from '@mui/material'

export const MonorailMenuItemOverrides: Components<Theme>['MuiMenuItem'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
      paddingRight: theme.spacing(6),
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
        backgroundColor: theme.palette.primary.lowEmphasis.active,
      },
      [`&.${menuItemClasses.selected}`]: {
        backgroundColor: theme.palette.action.selected,
      },
      [`& .${listItemTextClasses.inset}`]: {
        paddingLeft: theme.spacing(12),
      },
    }),
    dense: ({ theme }) => ({
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      [`& .${listItemIconClasses.root}`]: {
        minWidth: 40,
      },
      [`& .${listItemTextClasses.inset}`]: {
        paddingLeft: theme.spacing(10),
      },
    }),
  },
}
