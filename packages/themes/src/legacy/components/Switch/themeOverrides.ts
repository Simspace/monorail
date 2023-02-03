import type { Components, Theme } from '@mui/material'
import { alpha, switchClasses } from '@mui/material'

export const MonorailSwitchOverrides: Components<Theme>['MuiSwitch'] = {
  defaultProps: {
    edge: 'start',
  },
  styleOverrides: {
    root: ({ ownerState, theme }) => ({
      padding: theme.spacing(1, 3, 1, 1.5),
      [`&:hover :not(.${switchClasses.checked}) + .${switchClasses.track}`]: {
        borderColor: theme.palette.default.border.main,
        backgroundColor: theme.palette.default.lowEmphasis.hover,
      },
      ...(ownerState.edge === false && {
        marginLeft: theme.spacing(2),
      }),
    }),
    switchBase: ({ ownerState: { color = 'primary' }, theme }) => ({
      padding: theme.spacing(1),
      transform: `translate(${theme.spacing(1)}, ${theme.spacing(0.5)})`,
      '&.Mui-focusVisible': {
        [`& + .${switchClasses.track}`]: {
          boxShadow: `0 0 0 3px ${theme.palette.primary.focusRing.outer}`,
          borderColor: theme.palette.primary.focusRing.inner,
        },
      },
      '&:hover': {
        backgroundColor: theme.palette.action.focus,
        [`&.${switchClasses.disabled}`]: {
          borderColor: 'transparent',
        },
      },
      [`&.${switchClasses.checked}`]: {
        transform: `translate(${theme.spacing(4)}, ${theme.spacing(0.5)})`,
        ':hover': {
          backgroundColor: alpha(
            theme.palette[color].main,
            theme.palette.action.focusOpacity,
          ),
        },
        [`& + .${switchClasses.track}`]: {
          backgroundColor:
            theme.palette.mode === 'dark'
              ? theme.palette[color].light
              : theme.palette[color].main,
          opacity: 1,
          borderColor: 'transparent',
        },
        [`& .${switchClasses.thumb}`]: {
          backgroundColor: theme.palette.common.white,
        },
        '&.Mui-focusVisible': {
          [`& + .${switchClasses.track}`]: {
            boxShadow: `0 0 0 3px ${theme.palette[color].focusRing.outer}`,
            borderColor: theme.palette[color].focusRing.inner,
          },
        },
      },
      [`&.${switchClasses.disabled}`]: {
        [`& + .${switchClasses.track}`]: {
          backgroundColor: theme.palette.action.disabled,
          opacity: theme.palette.action.disabledOpacity,
          borderColor: 'transparent',
        },
        [`& > .${switchClasses.thumb}`]: {
          backgroundColor: theme.palette.common.white,
        },
        [`&.${switchClasses.checked}`]: {
          [`& + .${switchClasses.track}`]: {
            backgroundColor: theme.palette.action.disabled,
            opacity: 1,
          },
        },
      },
    }),
    thumb: ({ theme }) => ({
      backgroundColor: theme.palette.default.light,
      boxShadow: 'none',
      width: theme.spacing(3.5),
      height: theme.spacing(3.5),
    }),
    track: ({ theme }) => ({
      border: `1px solid ${theme.palette.default.border.light}`,
      backgroundColor: theme.palette.background.paper,
      borderRadius: 9,
      opacity: 1,
    }),
    sizeMedium: ({ theme }) => ({
      height: theme.spacing(6.5),
      width: theme.spacing(12),
    }),
    sizeSmall: ({ ownerState: { color = 'primary' }, theme }) => ({
      height: theme.spacing(7),
      width: theme.spacing(9.5),
      padding: theme.spacing(2, 3, 2, 1.5),
      [`&>.${switchClasses.switchBase}`]: {
        padding: theme.spacing(1),
        transform: `translate(${theme.spacing(1)}, ${theme.spacing(1.5)})`,
      },
      [`& .${switchClasses.track}`]: {
        borderRadius: theme.spacing(1.5),
      },
      [`& .${switchClasses.thumb}`]: {
        height: theme.spacing(2),
        width: theme.spacing(2),
        padding: theme.spacing(0.25),
      },
      [`& .${switchClasses.switchBase}.${switchClasses.checked}`]: {
        transform: `translate(${theme.spacing(3)}, ${theme.spacing(1.5)})`,
        [`& + .${switchClasses.track}`]: {
          backgroundColor: theme.palette[color].main,
        },
      },
    }),
  },
}
