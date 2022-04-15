import { Components, Theme } from '@mui/material'

const switchTokens = {
  track: {
    idle: 'white',
    hover: 50,
    focused: 50,
  },
  border: {
    idle: 300,
    hover: 600,
  },
  thumb: {
    idle: 300,
    hover: 300,
  },
  icon: 600,

  checked: {
    track: 600,
    thumb: 'white',
    bg: {
      default: 600,
      primary: 600,
      secondary: 400,
      info: 600,
      error: 500,
      warning: 400,
      success: 500,
    },
  },
} as const

export const MonorailSwitchOverrides: Components<Theme>['MuiSwitch'] = {
  defaultProps: {},
  styleOverrides: {
    root: {
      padding: 0,
    },
    switchBase: ({ theme }) => ({
      padding: 4,
      '&:hover': {
        backgroundColor: 'transparent',
      },
      '&.Mui-checked': {
        color: theme.palette.common.white,
        transform: 'translate(28px)',
      },
      '&.Mui-checked:hover': {
        backgroundColor: 'transparent',
      },
      '&.Mui-checked + .MuiSwitch-track': {
        opacity: 1,
      },
    }),
    checked: {},
    thumb: {
      boxShadow: 'none',
      width: 24,
      height: 24,
    },
    track: {
      borderRadius: 100,
    },
    sizeMedium: {
      height: 32,
      width: 60,
    },
    disabled: ({ theme }) => ({
      opacity: theme.palette.action.disabledOpacity,
    }),
    sizeSmall: {
      height: 24,
      width: 44,
      '& .MuiSwitch-switchBase.Mui-checked': {
        transform: 'translateX(20px)',
      },
    },
  },
}
