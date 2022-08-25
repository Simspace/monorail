import type { ButtonTypeMap, ExtendButtonBase } from '@mui/material'
import { Button as MuiButton } from '@mui/material'

/**
 *
 * Demos:
 *
 * - [Button group](https://mui.com/material-ui/react-button-group/)
 * - [Buttons](https://mui.com/material-ui/react-button/)
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
