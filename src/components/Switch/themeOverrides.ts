import { Components, switchClasses, Theme } from '@mui/material'

export const MonorailSwitchOverrides: Components<Theme>['MuiSwitch'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      padding: theme.spacing(1, 4, 1, 2), // '4px 16px 4px 8px'
      '&:hover': {
        [`& .${switchClasses.track}`]: {
          borderColor: theme.palette.default.border.main,
          backgroundColor: theme.palette.default.lowEmphasis.hover,
        },
      },
    }),
    switchBase: ({ ownerState: { color = 'primary' }, theme }) => ({
      padding: theme.spacing(2),
      transform: 'translate(5px)',
      '&.Mui-focusVisible': {
        [`& + .${switchClasses.track}`]: {
          boxShadow: `0 0 0 3px ${theme.palette.primary.focusRing.outer}`,
          borderColor: theme.palette.primary.focusRing.inner,
        },
      },
      '&:hover': {
        backgroundColor: 'transparent',
        [`&.${switchClasses.checked} .${switchClasses.thumb}`]: {
          backgroundColor: theme.palette[color].lowEmphasis.hover,
        },
        [`&.${switchClasses.disabled}`]: {
          borderColor: 'transparent',
        },
      },
      [`&.${switchClasses.checked}`]: {
        transform: 'translate(32px)',
        [`& + .${switchClasses.track}`]: {
          backgroundColor: theme.palette[color].main,
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
          },
          [`& > .${switchClasses.thumb}`]: {
            backgroundColor: theme.palette.default.mediumEmphasis.light,
          },
        },
      },
    }),
    // checked doesn't seem to work, so I used `.Mui-checked` inside `switchBase` -GS 4/15/22
    checked: {},
    thumb: ({ theme }) => ({
      backgroundColor: theme.palette.default.light,
      boxShadow: 'none',
      width: 24,
      height: 24,
    }),
    track: ({ theme }) => ({
      border: `2px solid ${theme.palette.default.border.light}`,
      backgroundColor: theme.palette.common.white,
      borderRadius: 100,
      opacity: 1,
    }),
    sizeMedium: {
      height: 40,
      width: 84,
    },
    disabled: {},
    sizeSmall: ({ ownerState: { color = 'primary' }, theme }) => ({
      height: 32,
      width: 62,
      padding: theme.spacing(1, 3, 1, 1.5), // '4px 12px 4px 6px'
      [`& > .${switchClasses.switchBase}`]: {
        padding: 8,
        transform: 'translate(2px)',
      },
      [`& .${switchClasses.switchBase}.${switchClasses.checked}`]: {
        transform: 'translateX(22px)',
        [`& + .${switchClasses.track}`]: {
          backgroundColor: theme.palette[color].main,
        },
      },
      ':hover': {
        [`& .${switchClasses.switchBase}.${switchClasses.checked}`]: {
          [`& .${switchClasses.thumb}`]: {
            backgroundColor: theme.palette[color].lowEmphasis.hover,
          },
        },
      },
    }),
  },
}
