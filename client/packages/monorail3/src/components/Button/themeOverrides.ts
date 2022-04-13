import type {} from '@mui/lab/themeAugmentation'
import { Components, darken, Theme } from '@mui/material'

declare module '@mui/material/Button' {
  /**
   * Extend the Button color prop to allow for the other semantic styles.
   *
   * These seem to work out-of-the-box with no custom variant theming
   */
  interface ButtonPropsColorOverrides {
    info: true
    success: true
    warning: true
    error: true
    inherit: false
  }
}

const buttonTokens = {
  contained: {
    bg: {
      idle: 600,
      hover: 700,
      active: 800,
      disabled: 400,
    },
  },
  outlined: {
    bg: {
      hover: 50,
      active: 100,
    },
    border: 400,
    text: {
      idle: 600,
      disabled: 400,
    },
  },
  text: {
    bg: {
      hover: 50,
      active: 100,
    },
    text: {
      idle: 600,
      disabled: 400,
    },
  },
} as const

export const MonorailButtonOverrides: Components<Theme>['MuiButton'] = {
  defaultProps: {
    disableElevation: true,
    disableRipple: true,
    disableFocusRipple: true,
    fullWidth: false,
    variant: 'contained',
  },
  styleOverrides: {
    root: ({ ownerState, theme }) => {
      const color = ownerState.color ?? 'primary'
      return {
        '&.Mui-focusVisible': {
          boxShadow: `0 0 0 4px ${theme.palette[color].focusRing?.outer}`,
          outline: `1px solid ${theme.palette[color].focusRing?.inner}`,
        },
        '&.Mui-disabled': {
          border: 'none',
          // I tried using the disabled prop, https://mui.com/api/button/#css
          // but it wouldn't override the default styles
          // This pattern seems to work better for .Mui-[state]
          ...(ownerState.variant === 'contained' && {
            backgroundColor:
              theme.palette[color][buttonTokens.contained.bg.disabled],
            color: theme.palette.common.white,
          }),
          ...(ownerState.variant === 'outlined' && {
            color: theme.palette[color][buttonTokens.outlined.text.disabled],
          }),
          ...(ownerState.variant === 'text' && {
            color: theme.palette[color][buttonTokens.text.text.disabled],
          }),
        },
      }
    },
    sizeSmall: ({ theme }) => ({
      padding: '4px 16px',
      minWidth: 'auto',
      fontSize: theme.typography.pxToRem(14),
      lineHeight: theme.typography.pxToRem(24),
    }),
    sizeMedium: ({ theme }) => ({
      padding: '8px 16px',
      lineHeight: theme.typography.pxToRem(24),
    }),
    sizeLarge: ({ theme }) => ({
      padding: '12px 24px',
      fontSize: theme.typography.pxToRem(16),
      lineHeight: theme.typography.pxToRem(24),
    }),
    iconSizeSmall: ({ theme }) => ({
      '> *:nth-of-type(1)': {
        fontSize: theme.typography.pxToRem(20),
      },
    }),
    iconSizeMedium: ({ theme }) => ({
      '> *:nth-of-type(1)': {
        fontSize: theme.typography.pxToRem(24),
      },
    }),
    iconSizeLarge: ({ theme }) => ({
      '> *:nth-of-type(1)': {
        fontSize: theme.typography.pxToRem(24),
      },
    }),
    contained: ({ ownerState, theme }) => {
      const color = ownerState.color ?? 'primary'
      return {
        color: theme.palette.common.white,
        '&:hover': {
          backgroundColor: theme.palette[color].dark,
        },
        '&:active': {
          backgroundColor: darken(
            theme.palette[color].dark,
            theme.palette.action.activatedOpacity,
          ),
        },
      }
    },
    outlined: ({ ownerState, theme }) => {
      const color = ownerState.color ?? 'primary'
      return {
        backgroundColor: theme.palette.common.white,
        border: 'none',
        outline: `1px solid ${
          theme.palette[color][buttonTokens.outlined.border]
        }`,
        color: theme.palette[color][buttonTokens.outlined.text.idle],
        '&:hover': {
          border: 'none',
          backgroundColor: theme.palette[color][buttonTokens.outlined.bg.hover],
        },
        '&:active': {
          backgroundColor:
            theme.palette[color][buttonTokens.outlined.bg.active],
        },
      }
    },
    text: ({ ownerState, theme }) => {
      const color = ownerState.color ?? 'primary'
      return {
        color: theme.palette[color][buttonTokens.text.text.idle],
        '&:hover': {
          backgroundColor: theme.palette[color][buttonTokens.text.bg.hover],
        },
        '&:active': {
          backgroundColor: theme.palette[color][buttonTokens.text.bg.active],
        },
      }
    },
    disabled: ({ ownerState, theme }) => {
      const color = ownerState.color ?? 'primary'

      return {
        color: theme.palette[color][buttonTokens.outlined.text.disabled],
        backgroundColor: theme.palette.common.white,
        ...(ownerState.variant === 'contained' && {
          backgroundColor:
            theme.palette[color][buttonTokens.contained.bg.disabled],
          color: theme.palette.common.white,
        }),
      }
    },
    startIcon: ({ ownerState }) => {
      switch (ownerState.size) {
        case 'large':
          return {
            marginRight: '8px',
            marginLeft: '-2px',
          }
        case 'medium':
          return {
            marginRight: '8px',
            marginLeft: '-2px',
          }
        case 'small':
          return {
            marginRight: '6px',
            marginLeft: '-2px',
          }
        default:
          return
      }
    },
    endIcon: ({ ownerState }) => {
      switch (ownerState.size) {
        case 'large':
          return {
            marginRight: '-2px',
            marginLeft: '8px',
          }
        case 'medium':
          return {
            marginRight: '-2px',
            marginLeft: '8px',
          }
        case 'small':
          return {
            marginRight: '-2px',
            marginLeft: '6px',
          }
        default:
          return
      }
    },
  },
}

export const MonorailLoadingButtonOverrides: Components<Theme>['MuiLoadingButton'] =
  {
    defaultProps: {
      // TODO:
      // - Tokenize brand logo in theme(SimSpace, PCTE)
      // - Make logo default loading spinner
      // - loadingIndicator: [Logo Spinner component here]
    },
    styleOverrides: {
      loadingIndicator: ({ ownerState, theme }) => {
        const color = ownerState.color ?? 'primary'
        return {
          color: theme.palette[color][buttonTokens.contained.bg.disabled],
        }
      },
    },
  }
