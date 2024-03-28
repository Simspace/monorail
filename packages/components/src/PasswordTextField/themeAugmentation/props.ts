import type { PasswordTextFieldProps } from '../PasswordTextFieldProps.js'

declare module '@mui/material/styles/props' {
  interface ComponentsPropsList {
    MonorailPasswordTextField: PasswordTextFieldProps
  }
}

export {}
