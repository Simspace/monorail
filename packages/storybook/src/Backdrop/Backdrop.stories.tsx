// Edit this file to add new stories
import React from 'react'

import type { BackdropProps } from '@monorail/components'
import { Backdrop, Button, CircularProgress } from '@monorail/components'

import { story } from '../helpers/storybook.js'

/**
 * Metadata for Backdrop stories - update/extend as needed
 * This is intended to be exported as story-level metadata from the main .stories.tsx file, like:
 * "export default { ...defaultStoryMeta } // Add/extend as needed
 */
export default { title: 'Feedback/Backdrop', component: Backdrop }

/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
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

export const Default = story(Template, {
  parameters: {
    docs: {
      description: {
        story: `The backdrop component is used to provide emphasis on a particular element or parts of it.`,
      },
    },
  },
})
