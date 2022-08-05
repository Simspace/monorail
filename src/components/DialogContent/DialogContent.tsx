import { DialogContent as MuiDialogContent } from '@mui/material'

declare module '@mui/material/DialogContent/DialogContent' {
  interface DialogContentProps {
    disablePadding?: boolean
  }
}

export const DialogContent: typeof MuiDialogContent = MuiDialogContent

export * from '@mui/material/DialogContent'
