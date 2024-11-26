import type { Components, Theme } from '@mui/material'
import { alpha, menuItemClasses } from '@mui/material'

export const MonorailMenuItemOverrides: Components<Theme>['MuiMenuItem'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      ...theme.typography.menuItem,
      transition: theme.transitions.create('box-shadow', {
        duration: theme.transitions.duration.shortest,
      }),
      [`&.${menuItemClasses.focusVisible}`]: {
        outline: 'none',
        boxShadow: `inset 0 0 0 2px ${theme.palette.primary.focusRing.inner}`,
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
        '&:hover': {
          backgroundColor: alpha(
            theme.palette.default.main,
            theme.palette.action.selectedOpacity +
              theme.palette.action.hoverOpacity,
          ),
        },
        [`&.${menuItemClasses.focusVisible}`]: {
          backgroundColor: theme.palette.action.selected,
          '&:hover': {
            backgroundColor: alpha(
              theme.palette.default.main,
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
