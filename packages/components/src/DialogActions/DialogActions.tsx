import { DialogActions as MuiDialogActions } from '@mui/material'

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
 * - [Dialog](https://simspace.gitlab.io/engineering/ux-engineering/monorail/main/storybook/?path=/docs/feedback-dialog--default)
 * - [Dialogs (MUI)](https://mui.com/material-ui/react-dialog/)
 *
 * API:
 *
 * - [DialogActions API](https://mui.com/material-ui/api/dialog-actions/)
 */
export const DialogActions: typeof MuiDialogActions = MuiDialogActions

export * from '@mui/material/DialogActions'
