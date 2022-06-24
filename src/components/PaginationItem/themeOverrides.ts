import { Components, paginationItemClasses, Theme } from '@mui/material'

export const MonorailPaginationItemOverrides: Components<Theme>['MuiPaginationItem'] =
  {
    defaultProps: {
      shape: 'rounded',
      color: 'primary',
    },
    styleOverrides: {
      root: ({ ownerState: { color = 'primary' }, theme }) => {
        return {
          color: theme.palette[color].shades[600],
          fontWeight: theme.typography.subtitle2.fontWeight,
          [`&.${paginationItemClasses.focusVisible}`]: {
            backgroundColor: theme.palette[color].shades[50],
            boxShadow: `0 0 0 4px ${theme.palette[color].focusRing.outer}`,
            outline: `1px solid ${theme.palette[color].focusRing.inner}`,
          },
          [`&.${paginationItemClasses.selected}`]: {
            backgroundColor: theme.palette.grey[200],
            color: theme.palette.text.primary,
            fontWeight: theme.typography.fontWeightBold,
          },
          [`&.${paginationItemClasses.selected}:hover`]: {
            backgroundColor: theme.palette.grey[200],
          },
          [`&.${paginationItemClasses.selected}.${paginationItemClasses.disabled}`]:
            {
              backgroundColor: theme.palette.grey[200],
            },
          [`&.${paginationItemClasses.selected}.${paginationItemClasses.focusVisible}`]:
            {
              backgroundColor: theme.palette.grey[200],
            },
          [`&.${paginationItemClasses.disabled}`]: {
            color: theme.palette.text.disabled,
          },
        }
      },
    },
  }
