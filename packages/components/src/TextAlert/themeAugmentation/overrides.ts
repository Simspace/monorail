import type { TextAlertClassKey } from '../textAlertClasses.js'

declare module '@mui/material/styles/overrides' {
  interface ComponentNameToClassKey {
    MonorailTextAlert: TextAlertClassKey
  }
}
