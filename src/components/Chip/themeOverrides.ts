import { chipClasses, Components, CSSInterpolation, Theme } from '@mui/material'

declare module '@mui/material/Chip' {
  /**
   * Extend the Chip variant prop to add `rectangular` variant.
   */
  interface ChipPropsVariantOverrides {
    rectangular: true
  }
}

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
          backgroundColor: theme.palette.default.mediumEmphasis.main,
          [`&.${chipClasses.focusVisible}`]: {
            boxShadow: `0 0 0 3px ${theme.palette.default.focusRing.outer}`,
            border: `1px solid ${theme.palette.default.focusRing.inner}`,
            backgroundColor: !clickable
              ? theme.palette.default.mediumEmphasis.main
              : theme.palette.primary.mediumEmphasis.main,
          },
        }),
      }
    },
    filled: ({ ownerState: { color = 'default' }, theme }) => {
      return {
        border: '1px solid transparent',
        backgroundColor:
          color === 'default'
            ? theme.palette[color].mediumEmphasis.main
            : theme.palette[color].main,
        [`&.${chipClasses.focusVisible}`]: {
          backgroundColor:
            color === 'default'
              ? theme.palette[color].mediumEmphasis.main
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
            : theme.palette[color].weakEmphasis.contrastText,
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
              ? theme.palette[color].mediumEmphasis.hover
              : theme.palette[color].hover,
        },
        '&:active': {
          boxShadow: 'none',
          backgroundColor:
            color === 'default'
              ? theme.palette[color].mediumEmphasis.active
              : theme.palette[color].active,
        },
      }

      const outlinedStyles: CSSInterpolation = {
        [`&.${chipClasses.clickable}:hover`]: {
          backgroundColor: theme.palette[color].weakEmphasis.hover,
        },
        [`&.${chipClasses.clickable}:active`]: {
          boxShadow: 'none',
          backgroundColor: theme.palette[color].weakEmphasis.active,
        },
      }

      const clickableRectangularStyles: CSSInterpolation = {
        backgroundColor: theme.palette.primary.mediumEmphasis.main,
        '&:hover': {
          backgroundColor: theme.palette.primary.mediumEmphasis.hover,
        },
        '&:active': {
          boxShadow: 'none',
          backgroundColor: theme.palette.primary.mediumEmphasis.active,
        },
        [`& > .${chipClasses.deleteIcon}`]: {
          color: theme.palette.primary.weakEmphasis.contrastText,
        },
        [`& > .${chipClasses.icon}`]: {
          color: theme.palette.primary.weakEmphasis.contrastText,
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
              ? theme.palette.default.weakEmphasis.contrastText
              : color === 'secondary' || color === 'warning'
              ? theme.palette[color].shades[700]
              : theme.palette[color].mediumEmphasis.light,
        },
        color:
          color === 'default'
            ? theme.palette.default.weakEmphasis.contrastText
            : color === 'secondary' || color === 'warning'
            ? theme.palette[color].shades[600]
            : theme.palette[color].mediumEmphasis.light,
      }

      const outlinedStyles: CSSInterpolation = {
        color: theme.palette[color].weakEmphasis.contrastText,
        '&:hover': {
          color: theme.palette[color].weakEmphasis.contrastText,
        },
      }

      const rectangularStyles: CSSInterpolation = {
        color: !clickable
          ? theme.palette.default.weakEmphasis.contrastText
          : theme.palette.primary.weakEmphasis.contrastText,
        '&:hover': {
          color: !clickable
            ? theme.palette.default.weakEmphasis.contrastText
            : theme.palette.primary.weakEmphasis.contrastText,
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
            ? theme.palette.default.weakEmphasis.contrastText
            : theme.palette.common.white,
        backgroundColor:
          color === 'default'
            ? theme.palette.default.shades[300]
            : theme.palette[color].mediumEmphasis.contrastText,
      }

      const outlinedStyles: CSSInterpolation = {
        color: theme.palette.common.white,
        backgroundColor: theme.palette[color].shades[600],
      }

      const readOnlyRectangularStyles: CSSInterpolation = {
        color: theme.palette.default.weakEmphasis.contrastText,
        backgroundColor: theme.palette.default.shades[300],
      }

      const clickableRectangularStyles: CSSInterpolation = {
        color: theme.palette.primary.weakEmphasis.contrastText,
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
