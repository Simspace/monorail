import type {} from '@mui/lab/themeAugmentation'
import type {
  ButtonProps,
  Components,
  CSSInterpolation,
  Theme,
} from '@mui/material'
import { buttonClasses } from '@mui/material'

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
        ...theme.typography.button,
        border: 'none',
        [`&.${buttonClasses.focusVisible}`]: {
          boxShadow: `inset 0 0 0 1px ${theme.palette[color].focusRing.inner}, 0 0 0 3px ${theme.palette[color].focusRing.outer}`,
        },
        [`&.${buttonClasses.disabled}`]: {
          border: 'none',
          opacity: theme.palette.action.disabledOpacity,
          // The `disabled` class key doesn't work, https://mui.com/api/button/#css
          // This pattern seems to work better for .Mui-[state] overrides
          ...(variant === 'contained' && {
            backgroundColor:
              color === 'primary'
                ? theme.palette[color].dark
                : theme.palette[color].main,
            color: theme.palette[color].contrastText,
          }),
          ...(variant === 'outlined' && {
            color: theme.palette[color].lowEmphasis.contrastText,
            boxShadow: `inset 0 0 0 1px ${theme.palette[color].border.light}`,
          }),
          ...(variant === 'text' && {
            color: theme.palette[color].lowEmphasis.contrastText,
          }),
        },
      }
    },
    sizeSmall: ({ theme }) => ({
      padding: theme.spacing(1.25, 3),
      minWidth: 'auto',
    }),
    sizeMedium: ({ theme }) => ({
      padding: theme.spacing(2, 4),
    }),
    sizeLarge: ({ theme }) => ({
      padding: theme.spacing(3, 6),
    }),
    iconSizeSmall: ({ theme }) => ({
      '> *:nth-of-type(1)': {
        fontSize: theme.typography.pxToRem(24),
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
    contained: ({
      ownerState: { color = 'primary' },
      theme,
    }: {
      ownerState: {
        color?: ButtonProps['color']
      }
      theme: Theme
    }) => {
      return {
        color: theme.palette[color].contrastText,
        backgroundColor:
          color === 'primary'
            ? theme.palette[color].dark
            : theme.palette[color].main,
        '&:hover': {
          background: theme.palette[color].hover,
          boxShadow: `inset 0 0 0 1px ${theme.palette[color].border.dark}`,
        },
        '&:active': {
          background: theme.palette[color].active,
          boxShadow: `inset 0 0 0 1px ${theme.palette[color].border.dark}`,
        },
      }
    },
    outlined: ({
      ownerState: { color = 'primary' },
      theme,
    }: {
      ownerState: {
        color?: ButtonProps['color']
      }
      theme: Theme
    }) => {
      const darkModeInteractionStates: CSSInterpolation = {
        '&:hover': {
          border: 'none',
          boxShadow: `inset 0 0 0 1px ${theme.palette[color].border.main}`,
          backgroundColor: theme.palette.background.paper,
          backgroundImage: `linear-gradient(${theme.palette[color].lowEmphasis.hover}, ${theme.palette[color].lowEmphasis.hover})`,
        },
        '&:active': {
          backgroundColor: theme.palette.background.paper,
          backgroundImage: `linear-gradient(${theme.palette[color].lowEmphasis.active}, ${theme.palette[color].lowEmphasis.active})`,
        },
      }
      const lightModeInteractionStates: CSSInterpolation = {
        '&:hover': {
          border: 'none',
          boxShadow: `inset 0 0 0 1px ${theme.palette[color].border.main}`,
          backgroundColor: theme.palette[color].lowEmphasis.hover,
        },
        '&:active': {
          backgroundColor: theme.palette[color].lowEmphasis.active,
        },
      }
      const outlinedButtonInteractionStates =
        theme.palette.mode === 'dark'
          ? darkModeInteractionStates
          : lightModeInteractionStates

      return {
        backgroundColor: theme.palette.background.paper,
        boxShadow: `inset 0 0 0 1px ${theme.palette[color].border.light}`,
        color: theme.palette[color].lowEmphasis.contrastText,
        ...outlinedButtonInteractionStates,
      }
    },
    text: ({
      ownerState: { color = 'primary' },
      theme,
    }: {
      ownerState: {
        color?: ButtonProps['color']
      }
      theme: Theme
    }) => {
      return {
        color: theme.palette[color].lowEmphasis.contrastText,
        '&:hover': {
          backgroundColor: theme.palette[color].lowEmphasis.hover,
        },
        '&:active': {
          backgroundColor: theme.palette[color].lowEmphasis.active,
        },
      }
    },
    startIcon: ({ ownerState, theme }) => {
      switch (ownerState.size) {
        case 'large':
          return {
            marginRight: theme.spacing(2),
            marginLeft: theme.spacing(-0.5),
          }
        case 'medium':
          return {
            marginRight: theme.spacing(2),
            marginLeft: theme.spacing(-0.5),
          }
        case 'small':
          return {
            marginRight: theme.spacing(1.5),
            marginLeft: theme.spacing(-0.5),
          }
        default:
          return
      }
    },
    endIcon: ({ ownerState, theme }) => {
      switch (ownerState.size) {
        case 'large':
          return {
            marginRight: theme.spacing(-0.5),
            marginLeft: theme.spacing(2),
          }
        case 'medium':
          return {
            marginRight: theme.spacing(-0.5),
            marginLeft: theme.spacing(2),
          }
        case 'small':
          return {
            marginRight: theme.spacing(-0.5),
            marginLeft: theme.spacing(1.5),
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
      loadingIndicator: ({
        ownerState: { color = 'primary', variant = 'contained' },
        theme,
      }) => {
        return variant === 'contained'
          ? {
              color: theme.palette.getContrastText(
                theme.palette[color].lowEmphasis.contrastText,
              ),
            }
          : {
              color: theme.palette[color].lowEmphasis.contrastText,
            }
      },
    },
  }
