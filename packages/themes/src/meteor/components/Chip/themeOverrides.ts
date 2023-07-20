import type { Components, CSSInterpolation, Theme } from '@mui/material'
import { chipClasses, darken } from '@mui/material'

export const MonorailChipOverrides: Components<Theme>['MuiChip'] = {
  defaultProps: {
    variant: 'muted',
  },
  styleOverrides: {
    root: ({ ownerState: { color = 'default', variant = 'muted' }, theme }) => {
      const mutedVariantStyles: CSSInterpolation = {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.default.lowEmphasis.light,
        [`&.${chipClasses.focusVisible}:not(.Mui-disabled)`]: {
          backgroundColor: theme.palette.default.lowEmphasis.light,
          boxShadow: `0 0 0 3px ${theme.palette.default.focusRing.outer}`,
          border: `1px solid ${theme.palette.default.focusRing.inner}`,
        },
      }

      const readOnlyRectangularStyles: CSSInterpolation = {
        borderRadius: 4,
        ...mutedVariantStyles,
      }

      const baseDraggableStyles: CSSInterpolation = {
        '&.react-draggable': {
          cursor: 'grab',
          '&:hover': {
            color:
              color === 'warning'
                ? theme.palette.warning.contrastText
                : theme.palette[color].dark,
            backgroundColor: theme.palette[color].lowEmphasis.main,
          },
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
        ...baseDraggableStyles,
      }
    },
    label: ({ theme }) => ({
      ...theme.typography.chip,
    }),
    filled: ({ ownerState: { color = 'default' }, theme }) => ({
      backgroundColor: theme.palette[color].lowEmphasis.light,
      color: theme.palette[color].lowEmphasis.contrastText,
      [`&.${chipClasses.focusVisible}`]: {
        backgroundColor: theme.palette[color].lowEmphasis.light,
      },
    }),
    outlined: ({ ownerState: { color = 'default' }, theme }) => {
      return {
        backgroundColor: theme.palette.background.paper,
        borderColor: theme.palette[color].border.main,
        color:
          color === 'warning'
            ? theme.palette.warning.lowEmphasis.contrastText
            : theme.palette[color].main,
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
          color: theme.palette[color].lowEmphasis.contrastText,
          backgroundColor: theme.palette[color].lowEmphasis.main,
        },
        '&:active': {
          boxShadow: 'none',
          backgroundColor: theme.palette[color].lowEmphasis.dark,
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
        backgroundColor: theme.palette.info.lowEmphasis.main,
        '&:hover': {
          backgroundColor: theme.palette.info.lowEmphasis.dark,
        },
        '&:active': {
          boxShadow: 'none',
          backgroundColor: darken(
            theme.palette.info.lowEmphasis.dark,
            theme.palette.action.activatedOpacity,
          ),
        },
        [`&.${chipClasses.focusVisible}`]: {
          backgroundColor: theme.palette.info.lowEmphasis.dark,
          boxShadow: `0 0 0 3px ${theme.palette.info.focusRing.outer}`,
          border: `1px solid ${theme.palette.info.focusRing.inner}`,
        },
        [`& > .${chipClasses.icon}`]: {
          color: theme.palette.info.main,
        },
      }

      return {
        ...(variant === 'muted' && mutedVariantStyles),
        ...(variant === 'filled' && filledVariantStyles),
        ...(variant === 'outlined' && outlinedVariantStyles),
        ...(variant === 'rectangular' && clickableRectangularStyles),
      }
    },
    icon: ({
      ownerState: { variant = 'muted', size = 'medium', color = 'default' },
      theme,
    }) => {
      return {
        color: theme.palette[color].lowEmphasis.contrastText,
        ...((variant === 'muted' || variant === 'rectangular') && {
          color: theme.palette.default.main,
        }),
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(-1.5),
        ...(size === 'small' && {
          marginRight: theme.spacing(-1),
          fontSize: theme.typography.pxToRem(16),
        }),
      }
    },
    deleteIcon: ({
      theme,
      ownerState: { variant = 'muted', color = 'default', clickable = false },
    }) => ({
      marginRight: theme.spacing(1),
      color: theme.palette[color].lowEmphasis.contrastText,
      '&:hover': {
        // We don't have hover token for lowEmphasis.contrastText
        // darken() is used to approximate the hover state
        color: darken(theme.palette[color].lowEmphasis.contrastText, 0.2),
      },
      // Muted and Rectangular variants should not inherit the `color` prop
      ...((variant === 'muted' || variant === 'rectangular') && {
        color: theme.palette.default.lowEmphasis.contrastText,
        '&:hover': {
          color: darken(theme.palette.default.lowEmphasis.contrastText, 0.2),
        },
      }),
      ...(variant === 'rectangular' &&
        clickable === true && {
          color: theme.palette.info.lowEmphasis.contrastText,
          '&:hover': {
            color: darken(theme.palette.info.lowEmphasis.contrastText, 0.2),
          },
        }),
    }),
    avatar: ({
      ownerState: {
        clickable = false,
        color = 'default',
        variant = 'muted',
        size = 'medium',
      },
      theme,
    }) => {
      const mutedVariantStyles: CSSInterpolation = {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.default.lowEmphasis.dark,
      }

      const filledVariantStyles: CSSInterpolation = {
        color: theme.palette[color].lowEmphasis.contrastText,
        backgroundColor: theme.palette[color].lowEmphasis.main,
      }

      const outlinedVariantStyles: CSSInterpolation = {
        color: theme.palette[color].contrastText,
        backgroundColor:
          color === 'warning'
            ? theme.palette.warning.dark
            : theme.palette[color].main,
      }

      const readOnlyRectangularStyles: CSSInterpolation = mutedVariantStyles

      const clickableRectangularStyles: CSSInterpolation = {
        color: theme.palette.info.contrastText,
        backgroundColor: theme.palette.info.main,
      }

      const sizeSmallStyles: CSSInterpolation = {
        width: theme.spacing(4),
        height: theme.spacing(4),
      }

      return {
        marginLeft: 4,
        ...theme.typography.body2,
        ...(variant === 'muted' && mutedVariantStyles),
        ...(variant === 'filled' && filledVariantStyles),
        ...(variant === 'outlined' && outlinedVariantStyles),
        ...(variant === 'rectangular' && readOnlyRectangularStyles),
        ...(variant === 'rectangular' &&
          clickable &&
          clickableRectangularStyles),
        ...(size === 'small' && sizeSmallStyles),
      }
    },
  },
}
