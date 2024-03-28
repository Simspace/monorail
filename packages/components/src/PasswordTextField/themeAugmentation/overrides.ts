import type { PasswordTextFieldClasses } from '../passwordTextFieldClasses.js'

declare module '@mui/material/styles/overrides' {
  interface ComponentNameToClassKey {
    MonorailPasswordTextField: PasswordTextFieldClasses
  }
}
