import { ToggleButtonGroup as MuiToggleButtonGroup } from '@mui/material'

declare module '@mui/material/ToggleButtonGroup' {
  /**
   * Extend the ToggleButtonGroup color variant to replace `standard` with `default`.
   */
  interface ToggleButtonGroupPropsColorOverrides {
    standard: false
    default: true
  }

  interface ToggleButtonGroupProps {
    borderless?: boolean
  }
}

/**
 *
 * Demos:
 *
 * - [Toggle button](https://simspace.gitlab.io/engineering/ux-engineering/monorail/main/storybook/?path=/docs/inputs-togglebutton--default)
 * - [Toggle button (MUI)](https://mui.com/material-ui/react-toggle-button/)
 *
 * API:
 *
 * - [ToggleButtonGroup API](https://mui.com/material-ui/api/toggle-button-group/)
 */
export const ToggleButtonGroup: typeof MuiToggleButtonGroup =
  MuiToggleButtonGroup

export * from '@mui/material/ToggleButtonGroup'
