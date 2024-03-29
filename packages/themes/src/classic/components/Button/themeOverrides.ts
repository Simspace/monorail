import type {} from '@mui/lab/themeAugmentation'
import type {
  ButtonProps,
  Components,
  CSSInterpolation,
  Theme,
} from '@mui/material'
import { alpha, buttonClasses } from '@mui/material'

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
      padding: theme.spacing(0.5, 4),
      minWidth: 'auto',
      ...theme.typography.buttonSmall,
    }),
    sizeMedium: ({ theme }) => ({
      padding: theme.spacing(2, 4),
      ...theme.typography.buttonMedium,
    }),
    sizeLarge: ({ theme }) => ({
      padding: theme.spacing(3, 6),
      ...theme.typography.buttonLarge,
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
        '&:hover': {
          backgroundColor: theme.palette[color].hover,
        },
        '&:active': {
          backgroundColor: theme.palette[color].active,
        },
        '&.MonorailButton-inverted': {
          backgroundColor: theme.palette.background.paper,
          color: theme.palette[color].lowEmphasis.contrastText,
          // Making an exception to not use .hover and .active tokens because of this variant needs a special visual treatment.
          // We can tokenize this pattern if it becomes more common. GS 9/9/22
          '&:hover': {
            backgroundColor: alpha(theme.palette.background.paper, 0.8),
          },
          '&:active': {
            backgroundColor: alpha(theme.palette.background.paper, 0.5),
          },
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
        '&.MonorailButton-inverted': {
          backgroundColor: 'transparent',
          color: 'currentColor',
          boxShadow: `inset 0 0 0 1px currentColor`,
          '&:hover': {
            border: 'none',
            backgroundColor: alpha(
              theme.palette.common.black,
              theme.palette.action.hoverOpacity,
            ),
            boxShadow: `inset 0 0 0 1px currentColor`,
          },
          '&:active': {
            backgroundColor: alpha(
              theme.palette.common.black,
              theme.palette.action.activatedOpacity,
            ),
            boxShadow: `inset 0 0 0 1px currentColor`,
          },
        },
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
        '&.MonorailButton-inverted': {
          backgroundColor: 'transparent',
          color: 'currentColor',
          '&:hover': {
            backgroundColor: alpha(
              theme.palette.common.black,
              theme.palette.action.hoverOpacity,
            ),
          },
          '&:active': {
            backgroundColor: alpha(
              theme.palette.common.black,
              theme.palette.action.activatedOpacity,
            ),
          },
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
