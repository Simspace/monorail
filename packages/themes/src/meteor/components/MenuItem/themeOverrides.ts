import type { Components, Theme } from '@mui/material'
import { alpha, menuItemClasses } from '@mui/material'

export const MonorailMenuItemOverrides: Components<Theme>['MuiMenuItem'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      ...theme.typography.menuItem,
      [`&.${menuItemClasses.focusVisible}`]: {
        outline: 'none',
        boxShadow: `inset 0 0 0 1px ${theme.palette.primary.focusRing.inner}, inset 0 0 0 4px ${theme.palette.primary.focusRing.outer}`,
        backgroundColor: 'inherit',
        borderRadius: 3,
      },
      '&:hover': {
        backgroundColor: theme.palette.action.hover,
      },
      '&:active': {
        backgroundColor: theme.palette.action.active,
      },
      [`&.${menuItemClasses.selected}`]: {
        backgroundColor: theme.palette.action.selected,
        [`&.${menuItemClasses.focusVisible}`]: {
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
    }),
    dense: ({ theme }) => ({
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      ...theme.typography.menuItemDense,
    }),
  },
}
