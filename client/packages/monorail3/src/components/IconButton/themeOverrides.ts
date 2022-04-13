import { alpha, Components, darken, Theme } from '@mui/material'

declare module '@mui/material/IconButton' {
  /**
   * Extend the IconButton color prop to allow for the other semantic styles.
   */
  interface IconButtonPropsColorOverrides {
    info: true
    success: true
    warning: true
    error: true
    default: true
    /**
     * Warning: Disabling 'inherit' will break Alert, because Alert's close button uses 'inherit' under the hood.
     */
    inherit: true
  }
}

const iconButtonTokens = {
  contained: {
    bg: {
      idle: 600,
      hover: 700,
      active: 800,
    },
  },
  outlined: {
    border: 600,
    bg: {
      hover: 50,
      active: 200,
    },
    icon: {
      idle: 600,
    },
  },
  chromeless: {
    bg: {
      hover: 50,
      active: 200,
    },
    icon: {
      idle: 600,
    },
  },
} as const

export const MonorailIconButtonOverrides: Components<Theme>['MuiIconButton'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ ownerState, theme }) => {
      const color = ownerState.color ?? 'primary'
      return (
        color !== 'inherit' && {
          '&.Mui-focusVisible': {
            boxShadow: `0 0 0 3px ${theme.palette[color].focusRing?.outer}`,
            border: `1px solid ${theme.palette[color].focusRing?.inner}`,
          },
          '&.Mui-disabled': {
            color: theme.palette[color].light,
          },
          ...(ownerState.shape === 'rounded' && {
            borderRadius: 3,
          }),
          ...(ownerState.variant === 'chromeless' && {
            backgroundColor: 'transparent',
            '&:hover': {
              backgroundColor:
                theme.palette[color][iconButtonTokens.chromeless.bg.hover],
            },
            '&:active': {
              backgroundColor:
                theme.palette[color][iconButtonTokens.chromeless.bg.active],
            },
          }),
          ...(ownerState.variant === 'contained' && {
            backgroundColor: theme.palette[color].main,
            color: theme.palette.getContrastText(theme.palette[color].main),
            '&:hover': {
              backgroundColor:
                theme.palette[color][iconButtonTokens.contained.bg.hover],
            },
            '&:active': {
              backgroundColor:
                theme.palette[color][iconButtonTokens.contained.bg.active],
            },
          }),
          ...(ownerState.variant === 'outlined' && {
            border: `1px solid ${theme.palette[color].main}`,
            backgroundColor: theme.palette.common.white,
            '&:hover': {
              backgroundColor:
                theme.palette[color][iconButtonTokens.outlined.bg.hover],
            },
            '&:active': {
              backgroundColor:
                theme.palette[color][iconButtonTokens.outlined.bg.active],
            },
          }),
        }
      )
    },
    colorInherit: ({ theme }) => ({
      '&:active': {
        backgroundColor: alpha(
          theme.palette.action.active,
          theme.palette.action.activatedOpacity,
        ),
      },
      '&.Mui-focusVisible': {
        boxShadow: `0 0 0 3px ${theme.palette.primary.focusRing?.outer}`,
        border: `1px solid ${theme.palette.primary.focusRing?.inner}`,
      },
    }),
    sizeSmall: ({ theme }) => ({
      height: 32,
      width: 32,
      fontSize: theme.typography.pxToRem(20),
    }),
    sizeMedium: ({ theme }) => ({
      height: 40,
      width: 40,
      fontSize: theme.typography.pxToRem(24),
    }),
    sizeLarge: ({ theme }) => ({
      height: 56,
      width: 56,
      fontSize: theme.typography.pxToRem(32),
    }),
  },
}
