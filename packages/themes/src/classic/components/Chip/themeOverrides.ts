import type { Components, CSSInterpolation, Theme } from '@mui/material'
import { chipClasses } from '@mui/material'

export const MonorailChipOverrides: Components<Theme>['MuiChip'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({
      ownerState: { clickable = false, color = 'default', variant = 'filled' },
      theme,
    }) => {
      return {
        fontWeight: theme.typography.fontWeightBold,
        [`&.${chipClasses.focusVisible}`]: {
          boxShadow: `0 0 0 3px ${theme.palette[color].focusRing.outer}`,
          border: `1px solid ${theme.palette[color].focusRing.inner}`,
        },
        ...(variant === 'rectangular' && {
          border: '1px solid transparent',
          borderRadius: 4,
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.default.lowEmphasis.main,
          [`&.${chipClasses.focusVisible}`]: {
            boxShadow: `0 0 0 3px ${theme.palette.default.focusRing.outer}`,
            border: `1px solid ${theme.palette.default.focusRing.inner}`,
            backgroundColor: !clickable
              ? theme.palette.default.lowEmphasis.main
              : theme.palette.primary.lowEmphasis.main,
          },
        }),
      }
    },
    filled: ({ ownerState: { color = 'default' }, theme }) => {
      return {
        border: '1px solid transparent',
        backgroundColor:
          color === 'default'
            ? theme.palette[color].lowEmphasis.main
            : theme.palette[color].main,
        [`&.${chipClasses.focusVisible}`]: {
          backgroundColor:
            color === 'default'
              ? theme.palette[color].lowEmphasis.main
              : theme.palette[color].main,
        },
      }
    },
    outlined: ({ ownerState: { color = 'default' }, theme }) => {
      return {
        backgroundColor: theme.palette.background.paper,
        borderColor: theme.palette[color].border.light,
        color:
          color === 'default'
            ? theme.palette.text.primary
            : theme.palette[color].lowEmphasis.contrastText,
        [`&.${chipClasses.focusVisible}`]: {
          backgroundColor: theme.palette.background.paper,
        },
      }
    },
    clickable: ({
      ownerState: { color = 'default', variant = 'default' },
      theme,
    }) => {
      const filledStyles: CSSInterpolation = {
        '&:hover': {
          backgroundColor:
            color === 'default'
              ? theme.palette[color].lowEmphasis.hover
              : theme.palette[color].hover,
        },
        '&:active': {
          boxShadow: 'none',
          backgroundColor:
            color === 'default'
              ? theme.palette[color].lowEmphasis.active
              : theme.palette[color].active,
        },
      }

      const outlinedStyles: CSSInterpolation = {
        [`&.${chipClasses.clickable}:hover`]: {
          backgroundColor: theme.palette[color].lowEmphasis.hover,
        },
        [`&.${chipClasses.clickable}:active`]: {
          boxShadow: 'none',
          backgroundColor: theme.palette[color].lowEmphasis.active,
        },
      }

      const clickableRectangularStyles: CSSInterpolation = {
        backgroundColor: theme.palette.primary.lowEmphasis.main,
        '&:hover': {
          backgroundColor: theme.palette.primary.lowEmphasis.hover,
        },
        '&:active': {
          boxShadow: 'none',
          backgroundColor: theme.palette.primary.lowEmphasis.active,
        },
        [`& > .${chipClasses.deleteIcon}`]: {
          color: theme.palette.primary.lowEmphasis.contrastText,
        },
        [`& > .${chipClasses.icon}`]: {
          color: theme.palette.primary.lowEmphasis.contrastText,
        },
      }

      return {
        ...(variant === 'filled' && filledStyles),
        ...(variant === 'outlined' && outlinedStyles),
        ...(variant === 'rectangular' && clickableRectangularStyles),
      }
    },
    sizeSmall: ({ theme }) => ({
      padding: theme.spacing(0.5, 1.25), // '2px 5px'
    }),
    icon: ({ ownerState: { variant = 'filled' } }) => ({
      marginLeft: variant === 'rectangular' ? 4 : 10,
      marginRight: -8,
    }),
    deleteIcon: ({
      ownerState: { clickable = false, color = 'default', variant = 'filled' },
      theme,
    }) => {
      const filledStyles: CSSInterpolation = {
        '&:hover': {
          color:
            color === 'default'
              ? theme.palette.default.lowEmphasis.contrastText
              : color === 'secondary' || color === 'warning'
              ? theme.palette[color].shades[700]
              : theme.palette[color].lowEmphasis.light,
        },
        color:
          color === 'default'
            ? theme.palette.default.lowEmphasis.contrastText
            : color === 'secondary' || color === 'warning'
            ? theme.palette[color].shades[600]
            : theme.palette[color].lowEmphasis.light,
      }

      const outlinedStyles: CSSInterpolation = {
        color: theme.palette[color].lowEmphasis.contrastText,
        '&:hover': {
          color: theme.palette[color].lowEmphasis.contrastText,
        },
      }

      const rectangularStyles: CSSInterpolation = {
        color: !clickable
          ? theme.palette.default.lowEmphasis.contrastText
          : theme.palette.primary.lowEmphasis.contrastText,
        '&:hover': {
          color: !clickable
            ? theme.palette.default.lowEmphasis.contrastText
            : theme.palette.primary.lowEmphasis.contrastText,
        },
      }

      return {
        marginRight: 3,
        ...(variant === 'filled' && filledStyles),
        ...(variant === 'outlined' && outlinedStyles),
        ...(variant === 'rectangular' && rectangularStyles),
      }
    },
    avatar: ({
      ownerState: { clickable = false, color = 'default', variant = 'filled' },
      theme,
    }) => {
      const filledStyles: CSSInterpolation = {
        color:
          color === 'default'
            ? theme.palette.default.lowEmphasis.contrastText
            : theme.palette.common.white,
        backgroundColor:
          color === 'default'
            ? theme.palette.default.shades[300]
            : theme.palette[color].lowEmphasis.contrastText,
      }

      const outlinedStyles: CSSInterpolation = {
        color: theme.palette.common.white,
        backgroundColor: theme.palette[color].shades[600],
      }

      const readOnlyRectangularStyles: CSSInterpolation = {
        color: theme.palette.default.lowEmphasis.contrastText,
        backgroundColor: theme.palette.default.shades[300],
      }

      const clickableRectangularStyles: CSSInterpolation = {
        color: theme.palette.primary.lowEmphasis.contrastText,
        backgroundColor: theme.palette.primary.shades[300],
      }

      return {
        marginLeft: 4,
        ...(variant === 'filled' && filledStyles),
        ...(variant === 'outlined' && outlinedStyles),
        ...(variant === 'rectangular' && readOnlyRectangularStyles),
        ...(variant === 'rectangular' &&
          clickable &&
          clickableRectangularStyles),
      }
    },
  },
}
