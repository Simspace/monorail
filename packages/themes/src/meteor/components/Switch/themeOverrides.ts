import type { Components, Theme } from '@mui/material'
import { alpha, switchClasses } from '@mui/material'

export const MonorailSwitchOverrides: Components<Theme>['MuiSwitch'] = {
  defaultProps: {
    edge: 'start',
    color: 'default',
  },
  styleOverrides: {
    root: ({ ownerState, theme }) => ({
      padding: theme.spacing(1, 4, 1, 2),
      ...(ownerState.edge === false && {
        marginLeft: 8,
      }),
      ...(ownerState.disabled !== undefined &&
        ownerState.disabled === true && {
          pointerEvents: 'none',
        }),
    }),
    switchBase: ({ ownerState: { color = 'default' }, theme }) => ({
      padding: theme.spacing(2),
      transform: `translate(${theme.spacing(1.25)})`,
      '&.Mui-focusVisible': {
        [`& + .${switchClasses.track}`]: {
          boxShadow: `inset 0 0 0 2px ${theme.palette.primary.focusRing.inner}`,
        },
      },
      '&:hover': {
        backgroundColor: alpha(theme.palette[color].main, 0.24),
        [`&.${switchClasses.disabled}`]: {
          borderColor: 'transparent',
        },
      },
      [`&.${switchClasses.checked}`]: {
        transform: `translate(${theme.spacing(8)})`,
        ':hover': {
          backgroundColor: alpha(theme.palette[color].main, 0.24),
        },
        [`& + .${switchClasses.track}`]: {
          backgroundColor: theme.palette[color].main,
          opacity: 1,
          borderColor: 'transparent',
        },
        [`& .${switchClasses.thumb}`]: {
          backgroundColor: theme.palette.background.paper,
        },
        '&.Mui-focusVisible': {
          [`& + .${switchClasses.track}`]: {
            boxShadow: `inset 0 0 0 2px ${theme.palette[color].focusRing.inner}`,
          },
        },
      },
      [`&.${switchClasses.disabled}`]: {
        [`& + .${switchClasses.track}`]: {
          backgroundColor: theme.palette.default.lowEmphasis.light,
          opacity: theme.palette.action.disabledOpacity,
        },
        [`&.${switchClasses.checked}`]: {
          [`& > .${switchClasses.thumb}`]: {
            backgroundColor: theme.palette.default.lowEmphasis.light,
          },
          [`& + .${switchClasses.track}`]: {
            backgroundColor: theme.palette.default.main,
            opacity: theme.palette.action.disabledOpacity,
          },
        },
      },
    }),
    thumb: ({ theme }) => ({
      backgroundColor: theme.palette.default.main,
      boxShadow: 'none',
      width: 24,
      height: 24,
    }),
    track: ({ theme }) => ({
      border: `2px solid ${theme.palette.default.border.main}`,
      backgroundColor: theme.palette.background.paper,
      borderRadius: 100,
      opacity: 1,
    }),
    sizeMedium: {
      height: 40,
      width: 84,
    },
    sizeSmall: ({ ownerState: { color = 'primary' }, theme }) => ({
      height: 40,
      width: 62,
      padding: theme.spacing(2, 3, 2, 1.5),
      [`&>.${switchClasses.switchBase}`]: {
        padding: theme.spacing(2),
        transform: `translate(${theme.spacing(0.5)}, ${theme.spacing(1)})`,
      },
      [`& .${switchClasses.switchBase}.${switchClasses.checked}`]: {
        transform: `translate(${theme.spacing(5.5)}, ${theme.spacing(1)})`,
        [`& + .${switchClasses.track}`]: {
          backgroundColor: theme.palette[color].main,
        },
      },
    }),
  },
}
