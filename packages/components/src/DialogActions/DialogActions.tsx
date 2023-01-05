import { DialogActions as MuiDialogActions, styled } from '@mui/material'

import { excludeProps } from '@monorail/utils'

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
export const DialogActions = styled(MuiDialogActions, {
  shouldForwardProp: excludeProps('divider'),
})(({ theme, divider }) => ({
  ...(divider === true && {
    borderTop: `1px solid ${theme.palette.divider}`,
  }),
}))

// @ts-expect-error
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
DialogActions.muiName = MuiDialogActions.muiName

export * from '@mui/material/DialogActions'
