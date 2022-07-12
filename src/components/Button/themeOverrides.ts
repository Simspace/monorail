import type {} from '@mui/lab/themeAugmentation'
import { buttonClasses, Components, Theme } from '@mui/material'

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

export const MonorailButtonOverrides: Components<Theme>['MuiButton'] = {
  defaultProps: {
    disableElevation: true,
    disableRipple: true,
    disableFocusRipple: true,
    fullWidth: false,
    variant: 'contained',
  },
  styleOverrides: {
    root: ({
      ownerState: { color = 'primary', variant = 'contained' },
      theme,
    }) => {
      return {
        border: 'none',
        [`&.${buttonClasses.focusVisible}`]: {
          boxShadow: `inset 0 0 0 1px ${theme.palette[color].focusRing.inner}, 0 0 0 3px ${theme.palette[color].focusRing.outer}`,
        },
        [`&.${buttonClasses.disabled}`]: {
          border: 'none',
          // I tried using the disabled prop, https://mui.com/api/button/#css
          // but it wouldn't override the default styles
          // This pattern seems to work better for .Mui-[state]
          ...(variant === 'contained' && {
            backgroundColor: theme.palette[color].main,
            color: theme.palette[color].contrastText,
            opacity: theme.palette.action.disabledOpacity,
          }),
          ...(variant === 'outlined' && {
            color: theme.palette[color].weakEmphasis.disabled.text,
          }),
          ...(variant === 'text' && {
            color: theme.palette[color].weakEmphasis.disabled.text,
          }),
        },
      }
    },
    sizeSmall: ({ theme }) => ({
      padding: theme.spacing(1, 4), // '4px 16px'
      minWidth: 'auto',
      fontSize: theme.typography.pxToRem(14),
      lineHeight: theme.typography.pxToRem(24),
    }),
    sizeMedium: ({ theme }) => ({
      padding: theme.spacing(2, 4), // '8px 16px'
      lineHeight: theme.typography.pxToRem(24),
    }),
    sizeLarge: ({ theme }) => ({
      padding: theme.spacing(3, 6), // '12px 24px'
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
    contained: ({ ownerState: { color = 'primary' }, theme }) => {
      return {
        color: theme.palette[color].contrastText,
        '&:hover': {
          backgroundColor: theme.palette[color].hover,
        },
        '&:active': {
          backgroundColor: theme.palette[color].active,
        },
      }
    },
    outlined: ({ ownerState: { color = 'primary' }, theme }) => {
      return {
        backgroundColor: theme.palette.common.white,
        boxShadow: `inset 0 0 0 1px ${theme.palette[color].border.light}`,
        color: theme.palette[color].weakEmphasis.contrastText,
        '&:hover': {
          border: 'none',
          backgroundColor: theme.palette[color].weakEmphasis.hover,
          boxShadow: `inset 0 0 0 1px ${theme.palette[color].border.main}`,
        },
        '&:active': {
          backgroundColor: theme.palette[color].weakEmphasis.active,
        },
      }
    },
    text: ({ ownerState: { color = 'primary' }, theme }) => {
      return {
        color: theme.palette[color].weakEmphasis.contrastText,
        '&:hover': {
          backgroundColor: theme.palette[color].weakEmphasis.hover,
        },
        '&:active': {
          backgroundColor: theme.palette[color].weakEmphasis.active,
        },
      }
    },
    startIcon: ({ ownerState, theme }) => {
      switch (ownerState.size) {
        case 'large':
          return {
            // TODO: Would it be useful to create a pxToSpacing() ?
            // theme.spacing(pxToSpacing(8))
            marginRight: theme.spacing(2), // 8px
            marginLeft: theme.spacing(-0.5), // -2px
          }
        case 'medium':
          return {
            marginRight: theme.spacing(2), // 8px
            marginLeft: theme.spacing(-0.5), // -2px
          }
        case 'small':
          return {
            marginRight: theme.spacing(1.5), // 6px
            marginLeft: theme.spacing(-0.5), // -2px
          }
        default:
          return
      }
    },
    endIcon: ({ ownerState, theme }) => {
      switch (ownerState.size) {
        case 'large':
          return {
            marginRight: theme.spacing(-0.5), // -2px
            marginLeft: theme.spacing(2), // 8px
          }
        case 'medium':
          return {
            marginRight: theme.spacing(-0.5), // -2px
            marginLeft: theme.spacing(2), // 8px
          }
        case 'small':
          return {
            marginRight: theme.spacing(-0.5), // -2px
            marginLeft: theme.spacing(1.5), // 6px
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
      loadingIndicator: ({ ownerState: { color = 'primary' }, theme }) => {
        return {
          color: theme.palette[color].disabled.background,
        }
      },
    },
  }
