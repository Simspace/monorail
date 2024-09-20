import type {} from '@mui/lab/themeAugmentation'
import type { ButtonProps, Components, Theme } from '@mui/material'
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
    root: ({ ownerState: { color = 'primary' }, theme }) => {
      return {
        ...theme.typography.button,
        border: 'none',
        [`&.${buttonClasses.focusVisible}`]: {
          boxShadow: `inset 0 0 0 1px ${theme.palette[color].focusRing.inner}, 0 0 0 3px ${theme.palette[color].focusRing.outer}`,
        },
        [`&.${buttonClasses.disabled}`]: {
          opacity: theme.palette.action.disabledOpacity,
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
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '1px',
          left: '1px',
          zIndex: 1,
          borderRadius: theme.spacing(1),
          width: 'calc(100% - 2px)',
          height: 'calc(100% - 2px)',
          backgroundColor: 'transparent',
          transition: theme.transitions.create(['background-color'], {
            duration: theme.transitions.duration.standard,
          }),
        },
        color: theme.palette[color].contrastText,
        backgroundColor: theme.palette[color].main,
        '&:hover': {
          boxShadow: `inset 0 0 0 1px ${theme.palette[color].border.dark}`,
          backgroundColor: theme.palette[color].main,
          '&::before': {
            backgroundColor: theme.palette.action.hover,
          },
        },
        '&:active': {
          backgroundColor: theme.palette[color].dark,
          boxShadow: `inset 0 0 0 1px ${theme.palette[color].border.dark}`,
          '&::before': {
            backgroundColor: theme.palette.action.active,
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
      return {
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '1px',
          left: '1px',
          zIndex: 1,
          borderRadius: theme.spacing(1),
          width: 'calc(100% - 2px)',
          height: 'calc(100% - 2px)',
          backgroundColor: 'transparent',
          transition: theme.transitions.create(['background-color'], {
            duration: theme.transitions.duration.standard,
          }),
        },
        backgroundColor: theme.palette[color].lowEmphasis.light,
        color: theme.palette[color].lowEmphasis.contrastText,
        boxShadow: `inset 0 0 0 1px ${theme.palette[color].border.light}`,
        transition: theme.transitions.create(['box-shadow'], {
          duration: theme.transitions.duration.standard,
        }),
        '&:hover': {
          border: 'none',
          backgroundColor: theme.palette[color].lowEmphasis.light,
          boxShadow: `inset 0 0 0 1px ${theme.palette[color].border.main}`,
          '&::before': {
            backgroundColor: theme.palette.action.hover,
          },
        },
        '&:active': {
          backgroundColor: theme.palette[color].lowEmphasis.light,
          '&::before': {
            backgroundColor: theme.palette.action.active,
          },
          ...(color === 'secondary' && {
            boxShadow: `inset 0 0 0 1px ${theme.palette[color].border.main}`,
          }),
        },
        ...(color === 'error' && {
          [`&.${buttonClasses.disabled}`]: {
            border: 'none',
          },
        }),
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
          backgroundColor: theme.palette.action.hover,
        },
        '&:active': {
          backgroundColor: theme.palette.action.active,
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
