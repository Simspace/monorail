import type { ButtonTypeMap, ExtendButtonBase } from '@mui/material'
import { Button as MuiButton } from '@mui/material'

declare module '@mui/material/Button' {
  /**
   * Extend the Button color prop to allow for the other semantic styles.
   *
   * These seem to work out-of-the-box with no custom variant theming
   */
  interface ButtonPropsColorOverrides {
    info: true
    success: true
    warning: true
    error: true
    inherit: false
    secondary: false
  }
}

/**
 *
 * Demos:
 *
 * - [Button](https://simspace.gitlab.io/engineering/ux-engineering/monorail/main/storybook/?path=/docs/inputs-button--default)
 * - [Button group (MUI)](https://mui.com/material-ui/react-button-group/)
 * - [Buttons (MUI)](https://mui.com/material-ui/react-button/)
 *
 * API:
 *
 * - [Button API](https://mui.com/material-ui/api/button/)
 * - inherits [ButtonBase API](https://mui.com/material-ui/api/button-base/)
 */
export const Button: ExtendButtonBase<
  ButtonTypeMap<
    {
      inverted?: boolean
    },
    'button'
  >
> = MuiButton

export * from '@mui/material/Button'
