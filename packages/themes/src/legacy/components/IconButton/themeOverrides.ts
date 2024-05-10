import type { Components, Theme } from '@mui/material'
import { alpha, buttonBaseClasses } from '@mui/material'

export const MonorailIconButtonOverrides: Components<Theme>['MuiIconButton'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({
      ownerState: {
        color = 'primary',
        variant = 'chromeless',
        shape = 'rounded',
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
    edgeEnd: {
      marginRight: '-8px',
    },
    edgeStart: {
      marginLeft: '-8px',
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
    sizeSmall: {
      height: 16,
      width: 16,
      fontSize: 12,
    },
    sizeMedium: {
      height: 24,
      width: 24,
      fontSize: 16,
    },
    sizeLarge: {
      height: 32,
      width: 32,
      fontSize: 24,
    },
  },
}
