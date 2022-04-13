import { Components, Theme } from '@mui/material'
import { SimpleInterpolation } from '@mui/styled-engine'

declare module '@mui/material/Chip' {
  /**
   * Extend the Chip variant prop to add `rectangular` variant.
   */
  interface ChipPropsVariantOverrides {
    rectangular: true
  }
}

const chipTokens = {
  filled: {
    // "Emphasis/Prominence" candidate for promotion
    strong: {
      bg: {
        idle: 600,
        hover: 700,
        active: 800,
        focused: 600,
      },
      deleteIcon: 50,
      avatar: {
        bg: 800,
      },
    },
    medium: {
      bg: {
        idle: 200,
        hover: 300,
        active: 400,
        focused: 200,
      },
      icon: 600,
      deleteIcon: 600,
      avatar: {
        bg: 800,
      },
    },
    weak: {
      bg: {
        idle: 100,
        hover: 200,
        active: 300,
        focused: 100,
      },
      icon: 600,
      deleteIcon: 600,
      avatar: {
        bg: 300,
        text: 600,
      },
    },
  },
  outlined: {
    bg: {
      hover: 50,
      active: 200,
    },
    border: 400,
    label: 600,
    icon: 600,
    deleteIcon: 600,
    avatar: {
      bg: 600,
    },
  },
  rectangular: {
    bg: {
      idle: 100,
      hover: 200,
      active: 300,
      focused: 100,
    },
    icon: 600,
    deleteIcon: 600,
    avatar: {
      bg: 300,
      text: 600,
    },
  },
} as const

export const MonorailChipOverrides: Components<Theme>['MuiChip'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ ownerState, theme }) => {
      const color = ownerState.color ?? 'default'
      const variant = ownerState.variant ?? 'filled'

      return {
        fontWeight: theme.typography.fontWeightBold,
        '&.Mui-focusVisible': {
          boxShadow: `0 0 0 3px ${theme.palette[color].focusRing?.outer}`,
          border: `1px solid ${theme.palette[color].focusRing?.inner}`,
        },
        ...(variant === 'rectangular' && {
          border: '1px solid transparent',
          borderRadius: 4,
          color: theme.palette.text.primary,
          backgroundColor:
            theme.palette.default[chipTokens.rectangular.bg.idle],
          '&.Mui-focusVisible': {
            boxShadow: `0 0 0 3px ${theme.palette.default.focusRing?.outer}`,
            border: `1px solid ${theme.palette.default.focusRing?.inner}`,
            backgroundColor: !ownerState.clickable
              ? theme.palette.default[chipTokens.rectangular.bg.focused]
              : theme.palette.primary[chipTokens.rectangular.bg.focused],
          },
        }),
      }
    },
    filled: ({ ownerState, theme }) => {
      const color = ownerState.color ?? 'default'

      return {
        border: '1px solid transparent',
        backgroundColor:
          color === 'default'
            ? theme.palette[color][chipTokens.filled.weak.bg.idle]
            : color === 'secondary' || color === 'warning'
            ? theme.palette[color][chipTokens.filled.medium.bg.idle]
            : theme.palette[color][chipTokens.filled.strong.bg.idle],
        '&.Mui-focusVisible': {
          backgroundColor:
            color === 'default'
              ? theme.palette[color][chipTokens.filled.weak.bg.focused]
              : color === 'secondary' || color === 'warning'
              ? theme.palette[color][chipTokens.filled.medium.bg.focused]
              : theme.palette[color][chipTokens.filled.strong.bg.focused],
        },
      }
    },
    outlined: ({ ownerState, theme }) => {
      const color = ownerState.color ?? 'default'

      return {
        backgroundColor: theme.palette.common.white,
        borderColor: theme.palette[color][chipTokens.outlined.border],
        color:
          color === 'default'
            ? theme.palette.text.primary
            : theme.palette[color][chipTokens.outlined.label],
        '&.Mui-focusVisible': {
          backgroundColor: theme.palette.common.white,
        },
      }
    },
    clickable: ({ ownerState, theme }) => {
      const color = ownerState.color ?? 'default'
      const variant = ownerState.variant ?? 'filled'

      const filledStyles: SimpleInterpolation = {
        '&:hover': {
          backgroundColor:
            color === 'default'
              ? theme.palette[color][chipTokens.filled.weak.bg.hover]
              : color === 'secondary' || color === 'warning'
              ? theme.palette[color][chipTokens.filled.medium.bg.hover]
              : theme.palette[color][chipTokens.filled.strong.bg.hover],
        },
        '&:active': {
          boxShadow: 'none',
          backgroundColor:
            color === 'default'
              ? theme.palette[color][chipTokens.filled.weak.bg.active]
              : color === 'secondary' || color === 'warning'
              ? theme.palette[color][chipTokens.filled.medium.bg.active]
              : theme.palette[color][chipTokens.filled.strong.bg.active],
        },
      }

      const outlinedStyles: SimpleInterpolation = {
        '&.MuiChip-clickable:hover': {
          backgroundColor: theme.palette[color][chipTokens.outlined.bg.hover],
        },
        '&.MuiChip-clickable:active': {
          boxShadow: 'none',
          backgroundColor: theme.palette[color][chipTokens.outlined.bg.active],
        },
      }

      const clickableRectangularStyles: SimpleInterpolation = {
        backgroundColor: theme.palette.primary[chipTokens.rectangular.bg.idle],
        '&:hover': {
          backgroundColor:
            theme.palette.primary[chipTokens.rectangular.bg.hover],
        },
        '&:active': {
          boxShadow: 'none',
          backgroundColor:
            theme.palette.primary[chipTokens.rectangular.bg.active],
        },
        '& > .MuiChip-deleteIcon': {
          color: theme.palette.primary[chipTokens.rectangular.deleteIcon],
        },
        '& > .MuiChip-icon': {
          color: theme.palette.primary[chipTokens.rectangular.icon],
        },
      }

      return {
        ...(variant === 'filled' && filledStyles),
        ...(variant === 'outlined' && outlinedStyles),
        ...(variant === 'rectangular' && clickableRectangularStyles),
      }
    },
    sizeSmall: {
      padding: '2px 5px',
    },
    icon: ({ ownerState }) => ({
      marginLeft: ownerState.variant === 'rectangular' ? 4 : 10,
      marginRight: -8,
    }),
    deleteIcon: ({ ownerState, theme }) => {
      const color = ownerState.color ?? 'default'
      const variant = ownerState.variant ?? 'filled'

      const filledStyles: SimpleInterpolation = {
        '&:hover': {
          color:
            color === 'default'
              ? theme.palette.default[chipTokens.filled.weak.deleteIcon]
              : color === 'secondary' || color === 'warning'
              ? theme.palette[color][chipTokens.filled.medium.deleteIcon]
              : theme.palette[color][chipTokens.filled.strong.deleteIcon],
        },
        color:
          color === 'default'
            ? theme.palette.default[chipTokens.filled.weak.deleteIcon]
            : color === 'secondary' || color === 'warning'
            ? theme.palette[color][chipTokens.filled.medium.deleteIcon]
            : theme.palette[color][chipTokens.filled.strong.deleteIcon],
      }

      const outlinedStyles: SimpleInterpolation = {
        color: theme.palette[color][chipTokens.outlined.deleteIcon],
        '&:hover': {
          color: theme.palette[color][chipTokens.outlined.deleteIcon],
        },
      }

      const rectangularStyles: SimpleInterpolation = {
        color: !ownerState.clickable
          ? theme.palette.default[chipTokens.rectangular.deleteIcon]
          : theme.palette.primary[chipTokens.rectangular.deleteIcon],
        '&:hover': {
          color: !ownerState.clickable
            ? theme.palette.default[chipTokens.rectangular.deleteIcon]
            : theme.palette.primary[chipTokens.rectangular.deleteIcon],
        },
      }

      return {
        marginRight: 3,
        ...(variant === 'filled' && filledStyles),
        ...(variant === 'outlined' && outlinedStyles),
        ...(variant === 'rectangular' && rectangularStyles),
      }
    },
    avatar: ({ ownerState, theme }) => {
      const color = ownerState.color ?? 'default'
      const variant = ownerState.variant ?? 'filled'

      const filledStyles: SimpleInterpolation = {
        color:
          color === 'default'
            ? theme.palette.default[chipTokens.filled.weak.avatar.text]
            : theme.palette.common.white,
        backgroundColor:
          color === 'default'
            ? theme.palette.default[chipTokens.filled.weak.avatar.bg]
            : theme.palette[color][chipTokens.filled.strong.avatar.bg],
      }

      const outlinedStyles: SimpleInterpolation = {
        color: theme.palette.common.white,
        backgroundColor: theme.palette[color][chipTokens.outlined.avatar.bg],
      }

      const readOnlyRectangularStyles: SimpleInterpolation = {
        color: theme.palette.default[chipTokens.rectangular.avatar.text],
        backgroundColor:
          theme.palette.default[chipTokens.rectangular.avatar.bg],
      }

      const clickableRectangularStyles: SimpleInterpolation = {
        color: theme.palette.primary[chipTokens.rectangular.avatar.text],
        backgroundColor:
          theme.palette.primary[chipTokens.rectangular.avatar.bg],
      }

      return {
        marginLeft: 4,
        ...(variant === 'filled' && filledStyles),
        ...(variant === 'outlined' && outlinedStyles),
        ...(variant === 'rectangular' && readOnlyRectangularStyles),
        ...(variant === 'rectangular' &&
          ownerState.clickable &&
          clickableRectangularStyles),
      }
    },
  },
}
