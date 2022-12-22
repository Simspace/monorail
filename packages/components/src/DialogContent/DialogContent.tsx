/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { DialogContent as MuiDialogContent, styled } from '@mui/material'

import { excludeProps } from '@monorail/utils'

declare module '@mui/material/DialogContent/DialogContent' {
  interface DialogContentProps {
    disablePadding?: boolean
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
 * - [DialogContent API](https://mui.com/material-ui/api/dialog-content/)
 */
export const DialogContent = styled(MuiDialogContent, {
  shouldForwardProp: excludeProps('disablePadding'),
})(props => ({
  ...(props.disablePadding && {
    padding: 0,
  }),
})) as typeof MuiDialogContent

// @ts-expect-error
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
DialogContent.muiName = MuiDialogContent.muiName

export * from '@mui/material/DialogContent'
