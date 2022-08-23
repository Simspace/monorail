import { DialogHeaderClassKey } from '../dialogHeaderClasses'

declare module '@mui/material/styles/overrides' {
  interface ComponentNameToClassKey {
    MonorailDialogHeader: DialogHeaderClassKey
  }
}
