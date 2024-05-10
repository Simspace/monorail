import type { Components, Theme } from '@mui/material'
import { alpha, buttonBaseClasses } from '@mui/material'

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
      return {
        ...(shape === 'rounded' && {
          borderRadius: 4,
        }),
        ...(color !== 'inherit' && {
          color: theme.palette[color].lowEmphasis.contrastText,
          [`&.${buttonBaseClasses.focusVisible}`]: {
            boxShadow: `0 0 0 3px ${theme.palette[color].focusRing.outer}`,
            border: `1px solid ${theme.palette[color].focusRing.inner}`,
          },
          [`&.${buttonBaseClasses.disabled}`]: {
            color: theme.palette[color].lowEmphasis.contrastText,
            ...(variant === 'contained' && {
              backgroundColor: theme.palette[color].main,
              color: theme.palette.getContrastText(theme.palette[color].main),
            }),
          },
          ...(variant === 'chromeless' && {
            backgroundColor: 'transparent',
            '&:hover': {
              backgroundColor: theme.palette[color].lowEmphasis.hover,
            },
            '&:active': {
              backgroundColor: theme.palette[color].lowEmphasis.active,
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
            border: `1px solid ${theme.palette[color].border.light}`,
            backgroundColor: theme.palette.background.paper,
            '&:hover': {
              backgroundColor: theme.palette[color].lowEmphasis.hover,
            },
            '&:active': {
              backgroundColor: theme.palette[color].lowEmphasis.active,
            },
          }),
        }),
      }
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
      height: 28,
      width: 28,
      fontSize: theme.typography.pxToRem(16),
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
