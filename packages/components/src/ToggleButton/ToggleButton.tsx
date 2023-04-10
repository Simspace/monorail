import { ToggleButton as MuiToggleButton } from '@mui/material'

declare module '@mui/material/ToggleButton' {
  interface ToggleButtonPropsColorOverrides {
    standard: false
    default: true
    secondary: false
  }
}

/**
 *
 * Demos:
 *
 * - [Toggle button](https://simspace.github.io/monorail/main/storybook/?path=/docs/inputs-togglebutton--default)
 * - [Toggle button (MUI)](https://mui.com/material-ui/react-toggle-button/)
 *
 * API:
 *
 * - [ToggleButton API](https://mui.com/material-ui/api/toggle-button/)
 * - inherits [ButtonBase API](https://mui.com/material-ui/api/button-base/)
 */
export const ToggleButton: typeof MuiToggleButton = MuiToggleButton

export * from '@mui/material/ToggleButton'
