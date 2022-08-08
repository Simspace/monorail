import { Checkbox as MuiCheckbox } from '@mui/material'

declare module '@mui/material/Checkbox/Checkbox' {
  interface CheckboxProps {
    disableHover?: boolean
  }
}

export const Checkbox: typeof MuiCheckbox = MuiCheckbox

export * from '@mui/material/Checkbox'
