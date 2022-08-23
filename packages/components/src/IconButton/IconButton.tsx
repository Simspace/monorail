import {
  ExtendButtonBase,
  IconButton as MuiIconButton,
  IconButtonTypeMap,
} from '@mui/material'

/**
 * Refer to the [Icons](https://mui.com/material-ui/icons/) section of the documentation
 * regarding the available icon options.
 *
 * Demos:
 *
 * - [Buttons](https://mui.com/material-ui/react-button/)
 *
 * API:
 *
 * - [IconButton API](https://mui.com/material-ui/api/icon-button/)
 * - inherits [ButtonBase API](https://mui.com/material-ui/api/button-base/)
 */
export const IconButton: ExtendButtonBase<
  IconButtonTypeMap<
    {
      variant?: 'contained' | 'outlined' | 'chromeless'
      shape?: 'circular' | 'rounded'
    },
    'button'
  >
> = MuiIconButton

export * from '@mui/material/IconButton'
