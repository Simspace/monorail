import type { Components, CSSInterpolation, Theme } from '@mui/material'
import { chipClasses, darken, getContrastRatio } from '@mui/material'

export const MonorailChipOverrides: Components<Theme>['MuiChip'] = {
  defaultProps: {
    variant: 'muted',
  },
  styleOverrides: {
    root: ({ ownerState: { color = 'default', variant = 'muted' }, theme }) => {
      const mutedVariantStyles: CSSInterpolation = {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.default.lowEmphasis.main,
        [`&.${chipClasses.focusVisible}:not(.Mui-disabled)`]: {
          backgroundColor: theme.palette.default.lowEmphasis.main,
          boxShadow: `0 0 0 3px ${theme.palette.default.focusRing.outer}`,
          border: `1px solid ${theme.palette.default.focusRing.inner}`,
        },
      }

      const readOnlyRectangularStyles: CSSInterpolation = {
        ...mutedVariantStyles,
        borderRadius: 4,
        padding: theme.spacing(1),
      }

      const baseDraggableStyles: CSSInterpolation = {
        '&.react-draggable': {
          cursor: 'grab',
        },
        '&.react-draggable-dragging': {
          cursor: 'grabbing',
          boxShadow: theme.shadows[4],
        },
      }

      return {
        border: '1px solid transparent',
        color: theme.palette[color].contrastText,
        [`&.${chipClasses.focusVisible}:not(.Mui-disabled)`]: {
          boxShadow: `0 0 0 3px ${theme.palette[color].focusRing.outer}`,
          border: `1px solid ${theme.palette[color].focusRing.inner}`,
        },
        ...(variant === 'muted' && mutedVariantStyles),
        ...(variant === 'rectangular' && readOnlyRectangularStyles),
        baseDraggableStyles,
      }
    },
    label: ({ ownerState: { variant = 'muted' }, theme }) => ({
      ...theme.typography.chip,
      ...(variant === 'rectangular' && {
        padding: theme.spacing(0, 1),
      }),
    }),
    filled: ({ ownerState: { color = 'default' }, theme }) => {
      const background = theme.palette[color].main
      return {
        color: theme.palette.getContrastText(background),
        backgroundColor: background,
        [`&.${chipClasses.focusVisible}`]: {
          backgroundColor: background,
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
      ownerState: { color = 'default', variant = 'muted' },
      theme,
    }) => {
      const mutedVariantStyles: CSSInterpolation = {
        '&:hover': {
          backgroundColor: darken(
            theme.palette.default.lowEmphasis.main,
            theme.palette.action.hoverOpacity,
          ),
        },
        '&:active': {
          boxShadow: 'none',
          backgroundColor: darken(
            theme.palette.default.lowEmphasis.main,
            theme.palette.action.activatedOpacity,
          ),
        },
      }

      const filledVariantStyles: CSSInterpolation = {
        '&:hover': {
          backgroundColor: theme.palette[color].hover,
        },
        '&:active': {
          boxShadow: 'none',
          backgroundColor: theme.palette[color].active,
        },
      }

      const outlinedVariantStyles: CSSInterpolation = {
        [`&.${chipClasses.clickable}:hover`]: {
          backgroundColor: theme.palette[color].lowEmphasis.hover,
        },
        [`&.${chipClasses.clickable}:active`]: {
          boxShadow: 'none',
          backgroundColor: theme.palette[color].lowEmphasis.active,
        },
      }

      const clickableRectangularStyles: CSSInterpolation = {
        borderRadius: 4,
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.primary.lowEmphasis.main,
        '&:hover': {
          backgroundColor: darken(
            theme.palette.primary.lowEmphasis.main,
            theme.palette.action.hoverOpacity,
          ),
        },
        '&:active': {
          boxShadow: 'none',
          backgroundColor: darken(
            theme.palette.primary.lowEmphasis.main,
            theme.palette.action.activatedOpacity,
          ),
        },
        [`&.${chipClasses.focusVisible}`]: {
          backgroundColor: theme.palette.primary.lowEmphasis.main,
          boxShadow: `0 0 0 3px ${theme.palette.default.focusRing.outer}`,
          border: `1px solid ${theme.palette.default.focusRing.inner}`,
        },
        [`& > .${chipClasses.icon}`]: {
          color: theme.palette.primary.lowEmphasis.contrastText,
        },
      }

      return {
        ...(variant === 'muted' && mutedVariantStyles),
        ...(variant === 'filled' && filledVariantStyles),
        ...(variant === 'outlined' && outlinedVariantStyles),
        ...(variant === 'rectangular' && clickableRectangularStyles),
      }
    },
    sizeSmall: ({ theme }) => ({
      padding: theme.spacing(0.5, 1),
      [`& .${chipClasses.icon}`]: {
        marginLeft: 0,
        marginRight: theme.spacing(-1),
      },
    }),
    icon: ({ ownerState: { variant = 'muted' }, theme }) => ({
      color: 'inherit',
      marginLeft:
        variant === 'rectangular' ? theme.spacing(1) : theme.spacing(2),
      marginRight: theme.spacing(-2),
    }),
    deleteIcon: ({
      ownerState: { clickable = false, color = 'default', variant = 'muted' },
      theme,
    }) => {
      const mutedVariantStyles: CSSInterpolation = {
        color: theme.palette.default.lowEmphasis.contrastText,
        '&:hover': {
          color: theme.palette.default.lowEmphasis.contrastText,
        },
      }

      const filledBackgroundColor = theme.palette[color].main

      const filledDeleteIconColor =
        getContrastRatio(
          theme.palette.default.lowEmphasis.contrastText,
          filledBackgroundColor,
        ) <= theme.palette.contrastThreshold
          ? theme.palette[color].lowEmphasis.light
          : theme.palette[color].lowEmphasis.contrastText

      const filledStyles: CSSInterpolation = {
        '&:hover': {
          color: filledDeleteIconColor,
        },
        color: filledDeleteIconColor,
      }

      const outlinedStyles: CSSInterpolation = {
        color: theme.palette[color].lowEmphasis.contrastText,
        '&:hover': {
          color: theme.palette[color].lowEmphasis.contrastText,
        },
      }

      const readOnlyRectangularStyles: CSSInterpolation = {
        ...mutedVariantStyles,
        margin: 0,
      }

      const clickableRectangularStyles: CSSInterpolation = {
        color: theme.palette.primary.lowEmphasis.contrastText,
        '&:hover': {
          color: theme.palette.primary.lowEmphasis.contrastText,
        },
      }

      return {
        marginRight: 3,
        ...(variant === 'muted' && mutedVariantStyles),
        ...(variant === 'filled' && filledStyles),
        ...(variant === 'outlined' && outlinedStyles),
        ...(variant === 'rectangular' && readOnlyRectangularStyles),
        ...(variant === 'rectangular' &&
          clickable &&
          clickableRectangularStyles),
      }
    },
    avatar: ({
      ownerState: { clickable = false, color = 'default', variant = 'muted' },
      theme,
    }) => {
      const mutedVariantStyles: CSSInterpolation = {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.default.lowEmphasis.dark,
      }

      const filledVariantStyles: CSSInterpolation = {
        color: theme.palette.getContrastText(
          theme.palette[color].lowEmphasis.contrastText,
        ),
        backgroundColor: theme.palette[color].lowEmphasis.contrastText,
      }

      const outlinedVariantStyles: CSSInterpolation = {
        color: theme.palette.getContrastText(
          theme.palette[color].lowEmphasis.contrastText,
        ),
        backgroundColor: theme.palette[color].lowEmphasis.contrastText,
      }

      const readOnlyRectangularStyles: CSSInterpolation = mutedVariantStyles

      const clickableRectangularStyles: CSSInterpolation = {
        color: theme.palette.primary.dark,
        backgroundColor: theme.palette.primary.lowEmphasis.dark,
      }

      return {
        marginLeft: 4,
        ...(variant === 'muted' && mutedVariantStyles),
        ...(variant === 'filled' && filledVariantStyles),
        ...(variant === 'outlined' && outlinedVariantStyles),
        ...(variant === 'rectangular' && readOnlyRectangularStyles),
        ...(variant === 'rectangular' &&
          clickable &&
          clickableRectangularStyles),
      }
    },
  },
}
