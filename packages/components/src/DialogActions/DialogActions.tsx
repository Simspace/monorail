import React from 'react'
import { DialogActions as MuiDialogActions } from '@mui/material'
import clsx from 'clsx'

import { dialogActionsClasses } from '@monorail/components/DialogActions/dialogActionsClasses'

declare module '@mui/material/DialogActions' {
  interface DialogActionsProps {
    /**
     * Display the top divider.
     */
    divider?: boolean
  }
}

/**
 *
 * Demos:
 *
 * - [Dialog](https://simspace.gitlab.io/engineering/ux-engineering/monorail/main/storybook/?path=/docs/feedback-dialog--default)
 * - [Dialogs (MUI)](https://mui.com/material-ui/react-dialog/)
 *
 * API:
 *
 * - [DialogActions API](https://mui.com/material-ui/api/dialog-actions/)
 */
export const DialogActions = React.forwardRef((inProps, ref) => {
  const { className, divider, ...other } = inProps
  return (
    <MuiDialogActions
      ref={ref}
      className={clsx(
        divider === true && dialogActionsClasses.divider,
        className,
      )}
      {...other}
    />
  )
}) as typeof MuiDialogActions

// @ts-expect-error
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
DialogActions.muiName = MuiDialogActions.muiName

export * from '@mui/material/DialogActions'
