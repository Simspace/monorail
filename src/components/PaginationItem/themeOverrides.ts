import { Components, paginationItemClasses, Theme } from '@mui/material'

export const MonorailPaginationItemOverrides: Components<Theme>['MuiPaginationItem'] =
  {
    defaultProps: {
      size: 'large',
      shape: 'rounded',
      color: 'primary',
    },
    styleOverrides: {
      root: ({ ownerState: { color = 'primary' }, theme }) => {
        return {
          color: theme.palette[color].weakEmphasis.contrastText,
          fontWeight: theme.typography.subtitle2.fontWeight,
          margin: 0,
          '&:hover': {
            backgroundColor: theme.palette[color].weakEmphasis.hover,
          },
          '&:active': {
            backgroundColor: theme.palette[color].weakEmphasis.active,
          },
          // focus-visible
          [`&.${paginationItemClasses.focusVisible}`]: {
            zIndex: 1,
            background: 'transparent',
            boxShadow: `0 0 0 4px ${theme.palette[color].focusRing.outer}`,
            outline: `1px solid ${theme.palette[color].focusRing.inner}`,
          },
          [`&.${paginationItemClasses.focusVisible}:hover`]: {
            backgroundColor: theme.palette[color].weakEmphasis.hover,
          },
          // selected
          [`&.${paginationItemClasses.selected}`]: {
            backgroundColor: theme.palette.default.weakEmphasis.selected,
            color: theme.palette.text.primary,
            fontWeight: theme.typography.fontWeightBold,
            '&:hover': {
              backgroundColor:
                theme.palette.default.weakEmphasis.selectedHovered,
            },
          },
          [`&.${paginationItemClasses.selected}.${paginationItemClasses.focusVisible}`]:
            {
              zIndex: 1,
              backgroundColor: theme.palette.default.weakEmphasis.selected,
            },
          [`&.${paginationItemClasses.selected}.${paginationItemClasses.disabled}`]:
            {
              backgroundColor: theme.palette.default.weakEmphasis.selected,
            },
          // disabled
          [`&.${paginationItemClasses.disabled}`]: {
            color: theme.palette.text.disabled,
          },
        }
      },
    },
  }
