import { Modal as MuiModal } from '@mui/material'

/**
 * Modal is a lower-level construct that is leveraged by the following components:
 *
 * *   [Dialog](https://mui.com/material-ui/api/dialog/)
 * *   [Drawer](https://mui.com/material-ui/api/drawer/)
 * *   [Menu](https://mui.com/material-ui/api/menu/)
 * *   [Popover](https://mui.com/material-ui/api/popover/)
 *
 * If you are creating a modal dialog, you probably want to use the [Dialog](https://mui.com/material-ui/api/dialog/) component
 * rather than directly using Modal.
 *
 * This component shares many concepts with [react-overlays](https://react-bootstrap.github.io/react-overlays/#modals).
 *
 * Demos:
 *
 * - [Modal](https://simspace.github.io/monorail/main/storybook/?path=/docs/utils-modal--default)
 * - [Modal (MUI)](https://mui.com/material-ui/react-modal/)
 *
 * API:
 *
 * - [Modal API](https://mui.com/material-ui/api/modal/)
 */
export const Modal: typeof MuiModal = MuiModal

export * from '@mui/material/Modal'
