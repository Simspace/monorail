import type { TextAlertProps } from '../textAlertProps.js'

declare module '@mui/material/styles/props' {
  interface ComponentsPropsList {
    MonorailTextAlert: TextAlertProps
  }
}

export {}
