import {
  Button as MuiButton,
  ButtonTypeMap,
  ExtendButtonBase,
} from '@mui/material'

export const Button: ExtendButtonBase<
  ButtonTypeMap<
    {
      inverted?: boolean
    },
    'button'
  >
> = MuiButton

export * from '@mui/material/Button'
