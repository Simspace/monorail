import { Components, Theme } from '@mui/material'

const switchTokens = {
  hover: 50,
  track: 300,
  thumb: 50,
  checked: {
    track: 600,
    thumb: 'white',
  },
} as const

export const MonorailSwitchOverrides: Components<Theme>['MuiSwitch'] = {
  defaultProps: {},
  styleOverrides: {},
}
