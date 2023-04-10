import { Switch as MuiSwitch } from '@mui/material'

declare module '@mui/material/Switch' {
  interface SwitchPropsColorOverrides {
    secondary: false
  }
}

/**
 *
 * Demos:
 *
 * - [Switch](https://simspace.github.io/monorail/main/storybook/?path=/docs/inputs-switch--default)
 * - [Switches (MUI)](https://mui.com/material-ui/react-switch/)
 * - [Transfer list (MUI)](https://mui.com/material-ui/react-transfer-list/)
 *
 * API:
 *
 * - [Switch API](https://mui.com/material-ui/api/switch/)
 * - inherits [IconButton API](https://mui.com/material-ui/api/icon-button/)
 */
export const Switch: typeof MuiSwitch = MuiSwitch

export * from '@mui/material/Switch'
