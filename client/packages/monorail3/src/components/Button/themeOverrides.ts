import type {} from '@mui/lab/themeAugmentation'
import { Components, darken, Theme } from '@mui/material'

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
          boxShadow: `0 0 0 3px ${theme.palette[color].light}`,
          outline: `1px solid ${theme.palette[color].dark}`,
        },
        '&.Mui-disabled': {
          border: 'none',
          // I tried using the disabled prop, https://mui.com/api/button/#css
          // but it wouldn't override the default styles
          // This pattern seems to work better for .Mui-[state]
          ...(ownerState.variant === 'contained' && {
            backgroundColor: theme.palette[color].light,
            color: theme.palette.common.white,
          }),
          ...(ownerState.variant === 'outlined' && {
            outline: `1px solid ${theme.palette[color].light}`,
            color: theme.palette[color].light,
          }),
          ...(ownerState.variant === 'text' && {
            color: theme.palette[color].light,
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
      padding: '8px 24px',
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
        outline: `1px solid ${theme.palette[color].light}`,
        '&:hover': {
          border: 'none',
          outline: `1px solid ${theme.palette[color!].main}`,
          backgroundColor: theme.palette[color].hover,
        },
        '&:active': {
          outline: `1px solid ${theme.palette[color].dark}`,
          backgroundColor: theme.palette[color].active,
        },
      }
    },
    text: ({ ownerState, theme }) => {
      const color = ownerState.color ?? 'primary'
      return {
        '&:hover': {
          backgroundColor: theme.palette[color].hover,
        },
        '&:active': {
          backgroundColor: theme.palette[color].active,
        },
      }
    },
    disabled: ({ ownerState, theme }) => {
      const color = ownerState.color ?? 'primary'
      switch (ownerState.variant) {
        case 'contained':
          return {
            backgroundColor: theme.palette[color].main,
          }
        case 'outlined':
          return {
            color: theme.palette[color].light,
          }
        default:
          return
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
            marginLeft: '-10px',
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
            marginRight: '-10px',
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
      // TODO: Make logo spinner default
      // loadingIndicator: [Logo Spinner component here]
    },
    styleOverrides: {
      loadingIndicator: ({ ownerState, theme }) => {
        const color = ownerState.color ?? 'primary'
        return {
          color: theme.palette[color].light,
        }
      },
    },
  }
