import {
  ExtendButtonBase,
  IconButton as MuiIconButton,
  IconButtonTypeMap,
} from '@mui/material'

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
