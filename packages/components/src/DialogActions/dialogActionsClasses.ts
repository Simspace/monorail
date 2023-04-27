import type { DialogActionsClasses } from '@mui/material'
import { dialogActionsClasses as muiDialogActionsClasses } from '@mui/material'

declare module '@mui/material/DialogActions/dialogActionsClasses' {
  export interface DialogActionsClasses {
    divider: string
  }
}

export const dialogActionsClasses: DialogActionsClasses = {
  ...muiDialogActionsClasses,
  divider: 'MonorailDialogActions-divider',
}
