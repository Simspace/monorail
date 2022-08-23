import React from 'react'
import { Dialog as MuiDialog } from '@mui/material'

import { DialogEventContext } from './dialogEventContext.js'
import { DialogProps } from './dialogProps.js'

/**
 * Dialogs are overlaid modal paper based components with a backdrop.
 *
 * Demos:
 *
 * - [Dialogs](https://mui.com/material-ui/react-dialog/)
 *
 * API:
 *
 * - [Dialog API](https://mui.com/material-ui/api/dialog/)
 * - inherits [Modal API](https://mui.com/material-ui/api/modal/)
 */
export const Dialog = React.forwardRef(function Dialog(props, ref) {
  const { children, onClose, ...other } = props

  const dialogEventContextValue = React.useMemo(() => ({ onClose }), [onClose])

  return (
    <MuiDialog ref={ref} onClose={onClose} {...other}>
      <DialogEventContext.Provider value={dialogEventContextValue}>
        {children}
      </DialogEventContext.Provider>
    </MuiDialog>
  )
}) as (props: DialogProps) => JSX.Element

export * from '@mui/material/Dialog'
