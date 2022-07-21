import { alpha, buttonBaseClasses, Components, Theme } from '@mui/material'

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

export const MonorailIconButtonOverrides: Components<Theme>['MuiIconButton'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({
      ownerState: {
        color = 'primary',
        variant = 'chromeless',
        shape = 'circular',
      },
      theme,
    }) => {
      return (
        color !== 'inherit' && {
          color: theme.palette[color].weakEmphasis.contrastText,
          [`&.${buttonBaseClasses.focusVisible}`]: {
            boxShadow: `0 0 0 3px ${theme.palette[color].focusRing.outer}`,
            border: `1px solid ${theme.palette[color].focusRing.inner}`,
          },
          [`&.${buttonBaseClasses.disabled}`]: {
            color: theme.palette[color].weakEmphasis.contrastText,
            opacity: theme.palette.action.disabledOpacity,
            ...(variant === 'contained' && {
              backgroundColor: theme.palette[color].main,
              color: theme.palette.getContrastText(theme.palette[color].main),
            }),
          },
          ...(shape === 'rounded' && {
            borderRadius: 4,
          }),
          ...(variant === 'chromeless' && {
            backgroundColor: 'transparent',
            '&:hover': {
              backgroundColor: theme.palette[color].weakEmphasis.hover,
            },
            '&:active': {
              backgroundColor: theme.palette[color].weakEmphasis.active,
            },
          }),
          ...(variant === 'contained' && {
            backgroundColor: theme.palette[color].main,
            color: theme.palette.getContrastText(theme.palette[color].main),
            '&:hover': {
              backgroundColor: theme.palette[color].hover,
            },
            '&:active': {
              backgroundColor: theme.palette[color].active,
            },
          }),
          ...(variant === 'outlined' && {
            border: `1px solid ${theme.palette[color].border.main}`,
            backgroundColor: theme.palette.common.white,
            '&:hover': {
              backgroundColor: theme.palette[color].weakEmphasis.hover,
            },
            '&:active': {
              backgroundColor: theme.palette[color].weakEmphasis.active,
            },
          }),
        }
      )
    },
    colorInherit: ({ theme }) => ({
      '&:active': {
        // This needs to stay transparent to interact with a colored background properly. See Alert (standard variant).
        backgroundColor: alpha(
          theme.palette.action.active,
          theme.palette.action.activatedOpacity,
        ),
      },
      [`&.${buttonBaseClasses.focusVisible}`]: {
        boxShadow: `0 0 0 3px ${theme.palette.primary.focusRing.outer}`,
        border: `1px solid ${theme.palette.primary.focusRing.inner}`,
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
