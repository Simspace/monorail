import type { Components, Theme } from '@mui/material'
import { alpha, paginationItemClasses } from '@mui/material'

export const MonorailPaginationItemOverrides: Components<Theme>['MuiPaginationItem'] =
  {
    defaultProps: {
      size: 'large',
      shape: 'rounded',
      color: 'primary',
    },
    styleOverrides: {
      root: ({ ownerState: { color = 'primary' }, theme }) => {
        const colorAlias =
          color !== undefined && color === 'primary'
            ? theme.palette.info.lowEmphasis.contrastText
            : theme.palette[color].lowEmphasis.contrastText
        return {
          color: colorAlias,
          fontWeight: theme.typography.subtitle2.fontWeight,
          margin: 0,
          // focus-visible
          [`&.${paginationItemClasses.focusVisible}`]: {
            zIndex: 1,
            background: 'transparent',
            boxShadow: `inset 0 0 0 2px ${theme.palette[color].focusRing.inner}`,
          },
          // selected
          [`&.${paginationItemClasses.selected}`]: {
            backgroundColor: theme.palette.action.selected,
            color: theme.palette.text.primary,
            fontWeight: theme.typography.fontWeightBold,
            '&:hover': {
              backgroundColor: alpha(
                theme.palette.default.main,
                theme.palette.action.selectedOpacity +
                  theme.palette.action.hoverOpacity,
              ),
            },
          },
          [`&.${paginationItemClasses.selected}.${paginationItemClasses.focusVisible}`]:
            {
              zIndex: 1,
              backgroundColor: theme.palette.action.selected,
            },
          [`&.${paginationItemClasses.selected}.${paginationItemClasses.disabled}`]:
            {
              backgroundColor: theme.palette.action.selected,
            },
          // disabled
          [`&.${paginationItemClasses.disabled}`]: {
            color: theme.palette.text.primary,
          },
        }
      },
      previousNext: ({ theme }) => ({
        color: theme.palette.secondary.lowEmphasis.contrastText,
      }),
      ellipsis: ({ theme }) => ({
        color: theme.palette.default.main,
      }),
    },
  }
