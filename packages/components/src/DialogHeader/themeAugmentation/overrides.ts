import type { DialogHeaderClassKey } from '../dialogHeaderClasses.js'

declare module '@mui/material/styles/overrides' {
  interface ComponentNameToClassKey {
    MonorailDialogHeader: DialogHeaderClassKey
  }
}
