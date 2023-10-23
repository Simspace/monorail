// Edit this file to add new stories
import React from 'react'

import type { BackdropProps } from '@monorail/components'
import { Backdrop, Button, CircularProgress } from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default { title: 'Feedback/Backdrop', component: Backdrop }

const Template = story<BackdropProps>(
  args => {
    const [open, setOpen] = React.useState(false)
    const handleClose = () => {
      setOpen(false)
    }
    const handleToggle = () => {
      setOpen(!open)
    }

    return (
      <div>
        <Button onClick={handleToggle}>Show backdrop</Button>
        <Backdrop
          sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
          open={open}
          onClick={handleClose}
          {...args}
        >
          <CircularProgress />
        </Backdrop>
      </div>
    )
  },
  {
    args: {},
    muiName: 'MuiBackdrop',
  },
)

/**
 * The backdrop component is used to provide emphasis on a particular element or parts of it.
 */
export const Default = story(Template)
