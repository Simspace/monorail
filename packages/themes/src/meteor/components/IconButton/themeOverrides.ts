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
              color: theme.palette.common.white,
              ...((color === 'default' || color === 'primary') && {
                backgroundColor: theme.palette[color].dark,
                color: theme.palette[color].contrastText,
              }),
            }),
            ...(variant === 'outlined' && {
              backgroundColor: theme.palette[color].lowEmphasis.light,
            }),
          },
          ...(variant === 'chromeless' && {
            backgroundColor: 'transparent',
            color: theme.palette[color].lowEmphasis.contrastText,
            '&:hover': {
              background: theme.palette.action.hover,
              ...((color === 'default' || color === 'primary') && {
                color: theme.palette.text.primary,
              }),
            },
            '&:active': {
              background: theme.palette.action.active,
              ...((color === 'default' || color === 'primary') && {
                color: theme.palette.text.primary,
              }),
            },
          }),
          ...(variant === 'contained' && {
            backgroundColor: theme.palette[color].main,
            color: theme.palette.common.white,
            ...((color === 'default' || color === 'primary') && {
              backgroundColor: theme.palette[color].dark,
              color: theme.palette[color].contrastText,
            }),
            '&:hover': {
              border: `1px solid ${theme.palette[color].border.dark}`,
              background: `linear-gradient(
                  0deg,
                  ${theme.palette.action.hover} 0%,
                  ${theme.palette.action.hover} 100%
                ),
              ${theme.palette[color].dark}`,
              ...((color === 'primary' || color === 'default') && {
                background: theme.palette[color].main,
              }),
            },
            '&:active': {
              background: `linear-gradient(
                0deg, ${theme.palette.action.active} 0%,
                ${theme.palette.action.active} 100%
              ),
              ${theme.palette[color].dark}`,
              border: `1px solid ${theme.palette[color].border.dark}`,
              ...((color === 'default' || color === 'primary') && {
                background: `linear-gradient(
                  0deg, ${theme.palette.action.active} 0%,
                  ${theme.palette.action.active} 100%
                ),
                ${theme.palette[color].main}`,
              }),
            },
          }),
          ...(variant === 'outlined' && {
            backgroundColor: theme.palette[color].lowEmphasis.light,
            color: theme.palette[color].lowEmphasis.contrastText,
            '&:hover': {
              border: `1px solid ${theme.palette[color].border.light}`,
              background: `linear-gradient(
                0deg, 
                ${theme.palette.action.hover} 0%, 
                ${theme.palette.action.hover} 100%
              ), 
              ${theme.palette[color].lowEmphasis.light}`,
            },
            '&:active': {
              border: `1px solid ${theme.palette[color].border.light}`,
              background: `linear-gradient(
                0deg,
                ${theme.palette.action.active} 0%,
                ${theme.palette.action.active} 100%
              ),
              ${theme.palette[color].lowEmphasis.main}`,
              ...((color === 'default' || color === 'primary') && {
                background: `linear-gradient(
                  0deg,
                  ${theme.palette.action.active} 0%,
                  ${theme.palette.action.active} 100%
                ),
                ${theme.palette[color].lowEmphasis.light}`,
              }),
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
      height: 34,
      width: 34,
      fontSize: theme.typography.pxToRem(24),
    }),
    sizeMedium: ({ theme }) => ({
      height: 40,
      width: 40,
      fontSize: theme.typography.pxToRem(24),
    }),
    sizeLarge: ({ theme }) => ({
      height: 48,
      width: 48,
      fontSize: theme.typography.pxToRem(24),
    }),
  },
}
