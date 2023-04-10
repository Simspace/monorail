import React from 'react'
import type { DialogActionsProps, Theme } from '@mui/material'
import { DialogActions as MuiDialogActions } from '@mui/material'

import { combineSxProps } from '@monorail/utils'

declare module '@mui/material/DialogActions/DialogActions' {
  interface DialogActionsProps {
    /**
     * Display the top divider.
     * @default false
     */
    divider?: boolean
  }
}

/**
 *
 * Demos:
 *
 * - [Dialog](https://simspace.github.io/monorail/main/storybook/?path=/docs/feedback-dialog--default)
 * - [Dialogs (MUI)](https://mui.com/material-ui/react-dialog/)
 *
 * API:
 *
 * - [DialogActions API](https://mui.com/material-ui/api/dialog-actions/)
 */
export const DialogActions = React.forwardRef(function DialogActions(
  inProps,
  ref,
) {
  const { divider, ...others } = inProps
  return (
    <MuiDialogActions
      ref={ref}
      {...others}
      sx={combineSxProps(getDialogActionsStyles(divider), others.sx)}
    />
  )
}) as (props: DialogActionsProps) => JSX.Element

// @ts-expect-error
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
DialogActions.muiName = MuiDialogActions.muiName

function getDialogActionsStyles(divider: boolean | undefined) {
  return (theme: Theme) => ({
    ...(divider === true && {
      borderTop: `1px solid ${theme.palette.divider}`,
    }),
  })
}

export * from '@mui/material/DialogActions'
