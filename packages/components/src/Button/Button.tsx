import type { ButtonTypeMap, ExtendButtonBase } from '@mui/material'
import { Button as MuiButton } from '@mui/material'

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
