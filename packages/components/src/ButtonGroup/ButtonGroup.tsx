import { ButtonGroup as MuiButtonGroup } from '@mui/material'

declare module '@mui/material/ButtonGroup' {
  /**
   * Extend the ButtonGroup color prop to allow for the other semantic styles.
   */
  interface ButtonGroupPropsColorOverrides {
    info: true
    success: true
    warning: true
    error: true
    inherit: false
    secondary: true
    primary: true
  }
}

/**
 *
 * Demos:
 *
 * - [Button group](https://simspace.gitlab.io/engineering/ux-engineering/monorail/main/storybook/?path=/docs/inputs-buttongroup--default)
 * - [Button group (MUI)](https://mui.com/material-ui/react-button-group/)
 *
 * API:
 *
 * - [ButtonGroup API](https://mui.com/material-ui/api/button-group/)
 */
export const ButtonGroup: typeof MuiButtonGroup = MuiButtonGroup

export * from '@mui/material/ButtonGroup'
