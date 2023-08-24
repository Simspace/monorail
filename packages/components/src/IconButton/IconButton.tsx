import type { IconButtonTypeMap } from '@mui/material'
import { IconButton as MuiIconButton } from '@mui/material'

import type { ExtendButtonBase, OverrideProps } from '@monorail/types'

export type IconButtonProps<
  D extends React.ElementType = IconButtonTypeMap['defaultComponent'],
  P = {},
> = OverrideProps<
  IconButtonTypeMap<P, D>,
  D,
  ['aria-label', 'aria-labelledby', 'aria-hidden']
>

/**
 * Refer to the [Icons](https://mui.com/material-ui/icons/) section of the documentation
 * regarding the available icon options.
 *
 * Demos:
 *
 * - [Icon Button](https://simspace.gitlab.io/engineering/ux-engineering/monorail/main/storybook/?path=/docs/inputs-iconbutton--default)
 * - [Buttons (MUI)](https://mui.com/material-ui/react-button/)
 *
 * API:
 *
 * - [IconButton API](https://mui.com/material-ui/api/icon-button/)
 * - inherits [ButtonBase API](https://mui.com/material-ui/api/button-base/)
 */
export const IconButton = MuiIconButton as ExtendButtonBase<
  IconButtonTypeMap<
    {
      variant?: 'contained' | 'outlined' | 'chromeless'
      shape?: 'circular' | 'rounded'
    },
    'button'
  >,
  ['aria-label', 'aria-labelledby', 'aria-hidden']
>

export * from '@mui/material/IconButton'
