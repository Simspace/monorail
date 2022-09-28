import React from 'react'
import { Person } from '@mui/icons-material'

import type { DialogProps } from '@monorail/components'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogHeader,
} from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default {
  title: 'Feedback/Dialog/DialogHeader',
  component: DialogHeader,
}

const Template = story(() => {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div>
        <Button onClick={handleClickOpen}>Open simple dialog</Button>
      </div>
      <SimpleDialog open={open} onSimpleDialogClose={handleClose} />
    </div>
  )
})

export const Default = story(Template)

export interface SimpleDialogProps {
  open: boolean
  onSimpleDialogClose: () => void
}

const SimpleDialog = ({
  onSimpleDialogClose,
  ...props
}: DialogProps & SimpleDialogProps) => {
  const handleClose = () => {
    onSimpleDialogClose()
  }

  return (
    <Dialog onClose={handleClose} {...props}>
      <DialogHeader
        title="Dialog Header"
        icon={<Person color="default" />}
        componentsProps={{ closeButton: { 'aria-label': 'close' } }}
      />
      <DialogContent>
        <DialogContentText>
          Content goes here. Detach to set a fixed height on the content area.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="text" onClick={handleClose}>
          Medium
        </Button>
        <Button onClick={handleClose} autoFocus>
          Medium
        </Button>
      </DialogActions>
    </Dialog>
  )
}
