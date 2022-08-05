import { DialogProps as MuiDialogProps } from '@mui/material/Dialog'
import { DistributiveOmit } from '@mui/types'

export interface DialogProps
  extends DistributiveOmit<MuiDialogProps, 'onClose'> {
  onClose?: {
    bivarianceHack(
      event: {},
      reason: 'headerCloseButtonClick' | 'backdropClick' | 'escapeKeyDown',
    ): void
  }['bivarianceHack']
}
