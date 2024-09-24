import type { Components, Theme } from '@mui/material'
import { alpha, buttonBaseClasses } from '@mui/material'

export const MonorailIconButtonOverrides: Components<Theme>['MuiIconButton'] = {
  styleOverrides: {
    root: ({
      ownerState: { color = 'primary', variant = 'contained' },
      theme,
    }) => {
      const roundedStyles = {
        borderRadius: '4px',
      }

      const disabledStyles = {
        [`&.${buttonBaseClasses.disabled}`]: {
          opacity: theme.palette.action.disabledOpacity,
        },
      }

      const containedStyles =
        color !== 'inherit'
          ? {
              '&::before': {
                content: '""',
                position: 'absolute',
                top: '1px',
                left: '1px',
                zIndex: 1,
                borderRadius: theme.spacing(1),
                width: 'calc(100% - 2px)',
                height: 'calc(100% - 2px)',
                backgroundColor: 'transparent',
                transition: theme.transitions.create(['background-color'], {
                  duration: theme.transitions.duration.shortest,
                }),
              },
              color: theme.palette[color].lowEmphasis.contrastText,
              backgroundColor: theme.palette[color].main,
              transition: theme.transitions.create(['box-shadow'], {
                duration: theme.transitions.duration.shortest,
              }),
              [`&.${buttonBaseClasses.focusVisible}`]: {
                boxShadow: `inset 0 0 0 1px ${theme.palette[color].focusRing.inner}, 0 0 0 3px ${theme.palette[color].focusRing.outer}`,
              },
              [`&.${buttonBaseClasses.disabled}`]: {
                color: theme.palette[color].lowEmphasis.contrastText,
                backgroundColor: theme.palette[color].main,
              },
              '&:hover': {
                backgroundColor: theme.palette[color].main,
                boxShadow: `inset 0 0 0 1px ${theme.palette[color].border.dark}`,
                '&::before': {
                  backgroundColor: theme.palette.action.hover,
                },
              },
              '&:active': {
                backgroundColor: theme.palette[color].main,
                boxShadow: `inset 0 0 0 1px ${theme.palette[color].border.dark}`,
                '&::before': {
                  backgroundColor: theme.palette.action.active,
                },
              },
            }
          : {}

      const outlinedStyles =
        color !== 'inherit'
          ? {
              '&::before': {
                content: '""',
                position: 'absolute',
                top: '1px',
                left: '1px',
                zIndex: 1,
                borderRadius: theme.spacing(1),
                width: 'calc(100% - 2px)',
                height: 'calc(100% - 2px)',
                backgroundColor: 'transparent',
                transition: theme.transitions.create(['background-color'], {
                  duration: theme.transitions.duration.shortest,
                }),
              },
              color: theme.palette[color].lowEmphasis.contrastText,
              backgroundColor: theme.palette[color].lowEmphasis.light,
              boxShadow: `inset 0 0 0 1px ${theme.palette[color].border.light}`,
              transition: theme.transitions.create(['box-shadow'], {
                duration: theme.transitions.duration.shortest,
              }),
              [`&.${buttonBaseClasses.focusVisible}`]: {
                boxShadow: `inset 0 0 0 1px ${theme.palette[color].focusRing.inner}, 0 0 0 3px ${theme.palette[color].focusRing.outer}`,
              },
              [`&.${buttonBaseClasses.disabled}`]: {
                color: theme.palette[color].lowEmphasis.contrastText,
                backgroundColor: theme.palette[color].lowEmphasis.light,
              },
              '&:hover': {
                backgroundColor: theme.palette[color].lowEmphasis.light,
                boxShadow: `inset 0 0 0 1px ${theme.palette[color].border.main}`,
                '&::before': {
                  backgroundColor: theme.palette.action.hover,
                },
              },
              '&:active': {
                backgroundColor: theme.palette[color].lowEmphasis.light,
                boxShadow: `inset 0 0 0 1px ${theme.palette[color].border.main}`,
                '&::before': {
                  backgroundColor: theme.palette.action.active,
                },
              },
            }
          : {}

      const chromelessStyles =
        color !== 'inherit'
          ? {
              color: theme.palette[color].lowEmphasis.contrastText,
              transition: theme.transitions.create(
                ['box-shadow', 'background-color'],
                {
                  duration: theme.transitions.duration.shortest,
                },
              ),
              '&:hover': {
                backgroundColor: theme.palette.action.hover,
              },
              '&:active': {
                backgroundColor: theme.palette.action.active,
              },
              [`&.${buttonBaseClasses.focusVisible}`]: {
                boxShadow: `inset 0 0 0 1px ${theme.palette[color].focusRing.inner}, 0 0 0 3px ${theme.palette[color].focusRing.outer}`,
              },
            }
          : {}

      return {
        ...roundedStyles,
        ...disabledStyles,
        ...(variant === 'contained' && containedStyles),
        ...(variant === 'outlined' && outlinedStyles),
        ...(variant === 'chromeless' && chromelessStyles),
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
