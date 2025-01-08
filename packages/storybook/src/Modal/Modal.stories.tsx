// Edit this file to add new stories
import React from 'react'
import { styled } from '@mui/material'

import type { ModalProps } from '@monorail/components'
import { Backdrop, Box, Button, Fade, Modal, Typography } from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default { title: 'Utils/Modal', component: Modal }

const Template = story<ModalProps>(
  () => {
    const [open, setOpen] = React.useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button onClick={handleOpen}>Open modal</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        >
          <Box
            sx={{
              position: 'absolute' as 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 400,
              bgcolor: 'background.paper',
              border: '2px solid #000',
              boxShadow: 24,
              p: 4,
            }}
          >
            <Typography id='modal-modal-title' variant='h3' component='h2'>
              Text in a modal
            </Typography>
            <Typography id='modal-modal-description' sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>
      </div>
    )
  },
  { args: {}, muiName: 'MuiModal' },
)

export const Default = story(Template)

const StyledModal = styled(Modal)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledModalBackdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`

export const StyledModalDemo = story<ModalProps>(() => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <button type='button' onClick={handleOpen}>
        Open modal
      </button>
      <StyledModal
        aria-labelledby='styled-modal-title'
        aria-describedby='styled-modal-description'
        open={open}
        onClose={handleClose}
        slots={{
          backdrop: StyledModalBackdrop,
        }}
      >
        <Box
          sx={{
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            p: 2,
            px: 4,
            pb: 3,
          }}
        >
          <h2 id='styled-modal-title'>Text in a modal</h2>
          <p id='styled-modal-description'>Aliquid amet deserunt earum!</p>
        </Box>
      </StyledModal>
    </div>
  )
})

const nestedModalStyles = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
}

const ChildModal = () => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>Open Child Modal</Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby='child-modal-title'
        aria-describedby='child-modal-description'
      >
        <Box sx={{ ...nestedModalStyles, width: 200 }}>
          <h2 id='child-modal-title'>Text in a child modal</h2>
          <p id='child-modal-description'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <Button onClick={handleClose}>Close Child Modal</Button>
        </Box>
      </Modal>
    </React.Fragment>
  )
}

/**
 * Modals can be nested, for example a select within a dialog, but stacking of more than two modals, or any two modals with a backdrop is discouraged.
 */
export const NestedModal = story<ModalProps>(() => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='parent-modal-title'
        aria-describedby='parent-modal-description'
      >
        <Box sx={{ ...nestedModalStyles, width: 400 }}>
          <h2 id='parent-modal-title'>Text in a modal</h2>
          <p id='parent-modal-description'>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
          <ChildModal />
        </Box>
      </Modal>
    </div>
  )
})

/**
 * The open/close state of the modal can be animated with a transition component. This component should respect the following conditions:
 *
 * - Be a direct child descendent of the modal.
 * - Have an `in` prop. This corresponds to the open/close state.
 * - Call the `onEnter` callback prop when the enter transition starts.
 * - Call the `onExited` callback prop when the exit transition is completed. These two callbacks allow the modal to unmount the child content when closed and fully transitioned.
 *
 * Modal has built-in support for `react-transition-group`.
 */
export const TransitionsModal = story<ModalProps>(() => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: 'absolute' as 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 400,
              bgcolor: 'background.paper',
              border: '2px solid #000',
              boxShadow: 24,
              p: 4,
            }}
          >
            <Typography id='transition-modal-title' variant='h3' component='h2'>
              Text in a modal
            </Typography>
            <Typography id='transition-modal-description' sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  )
})

/**
 * The content of modal is unmounted when closed. If you need to make the content available to search engines or render expensive component trees inside your modal while optimizing for interaction responsiveness it might be a good idea to change this default behavior by enabling the `keepMounted` prop:
 */
export const KeepMountedModal = story<ModalProps>(() => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby='keep-mounted-modal-title'
        aria-describedby='keep-mounted-modal-description'
      >
        <Box
          sx={{
            position: 'absolute' as 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id='keep-mounted-modal-title' variant='h3' component='h2'>
            Text in a modal
          </Typography>
          <Typography id='keep-mounted-modal-description' sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  )
})

/**
 * React [doesn't support](https://github.com/facebook/react/issues/13097) the [createPortal()](https://reactjs.org/docs/portals.html) API on the server. In order to display the modal, you need to disable the portal feature with the `disablePortal` prop:
 */
export const ServerModal = story<ModalProps>(() => {
  const rootRef = React.useRef<HTMLDivElement>(null)

  return (
    <Box
      sx={{
        height: 300,
        flexGrow: 1,
        minWidth: 300,
        transform: 'translateZ(0)',
        // The position fixed scoping doesn't work in IE11.
        // Disable this demo to preserve the others.
        '@media all and (-ms-high-contrast: none)': {
          display: 'none',
        },
      }}
      ref={rootRef}
    >
      <Modal
        disablePortal
        disableEnforceFocus
        disableAutoFocus
        open
        // aria-labelledby="server-modal-title"
        // aria-describedby="server-modal-description"
        sx={{
          display: 'flex',
          p: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        container={() => rootRef.current}
      >
        <Box
          sx={{
            position: 'relative',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: (theme) => theme.shadows[5],
            p: 4,
          }}
        >
          <Typography id='server-modal-title' variant='h3' component='h2'>
            Server-side modal
          </Typography>
          <Typography id='server-modal-description' sx={{ pt: 2 }}>
            If you disable JavaScript, you will still see me.
          </Typography>
        </Box>
      </Modal>
    </Box>
  )
})
