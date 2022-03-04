// Edit this file to add new stories
import React from 'react'
import { Portal } from '@mui/base'
import { Box, ClickAwayListener, ClickAwayListenerProps } from '@mui/material'

import { story } from '../../../__tests__/helpers/storybook'

/**
 * Metadata for ClickAwayListener stories - update/extend as needed
 * This is intended to be exported as story-level metadata from the main .stories.tsx file, like:
 * "export default { ...defaultStoryMeta } // Add/extend as needed
 */
export default {
  title: 'Utils/ClickAwayListener',
  component: ClickAwayListener,
}

/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<ClickAwayListenerProps>(
  args => {
    const [open, setOpen] = React.useState(false)

    const handleClick = () => {
      setOpen(prev => !prev)
    }

    const handleClickAway = () => {
      setOpen(false)
    }

    const styles = {
      position: 'absolute',
      top: 28,
      right: 0,
      left: 0,
      zIndex: 1,
      border: '1px solid',
      p: 1,
      bgcolor: 'background.paper',
    } as const

    return (
      <ClickAwayListener onClickAway={handleClickAway} {...args}>
        <Box sx={{ position: 'relative' }}>
          <button type="button" onClick={handleClick}>
            Open menu dropdown
          </button>
          {open ? (
            <Box sx={styles}>
              Click me, I will stay visible until you click outside.
            </Box>
          ) : null}
        </Box>
      </ClickAwayListener>
    )
  },
  { args: {} },
)

/** Default story for ClickAwayListener (edit/remove by hand if needed) */
export const Default = story(Template)

export const WithPortal = story<ClickAwayListenerProps>(
  () => {
    const [open, setOpen] = React.useState(false)

    const handleClick = () => {
      setOpen(prev => !prev)
    }

    const handleClickAway = () => {
      setOpen(false)
    }

    const styles = {
      position: 'fixed',
      width: 200,
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      border: '1px solid',
      p: 1,
      bgcolor: 'background.paper',
    } as const

    return (
      <ClickAwayListener onClickAway={handleClickAway}>
        <div>
          <button type="button" onClick={handleClick}>
            Open menu dropdown
          </button>
          {open ? (
            <Portal>
              <Box sx={styles}>
                Click me, I will stay visible until you click outside. This
                content is in a Portal.
              </Box>
            </Portal>
          ) : null}
        </div>
      </ClickAwayListener>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `The following demo uses Portal to render the dropdown into a new "subtree" outside of current DOM hierarchy.`,
        },
      },
    },
  },
)

export const LeadingEdge = story<ClickAwayListenerProps>(
  () => {
    const [open, setOpen] = React.useState(false)

    const handleClick = () => {
      setOpen(prev => !prev)
    }

    const handleClickAway = () => {
      setOpen(false)
    }

    const styles = {
      position: 'absolute',
      top: 28,
      right: 0,
      left: 0,
      zIndex: 1,
      border: '1px solid',
      p: 1,
      bgcolor: 'background.paper',
    } as const

    return (
      <ClickAwayListener
        mouseEvent="onMouseDown"
        touchEvent="onTouchStart"
        onClickAway={handleClickAway}
      >
        <Box sx={{ position: 'relative' }}>
          <button type="button" onClick={handleClick}>
            Open menu dropdown
          </button>
          {open ? (
            <Box sx={styles}>
              Click me, I will stay visible until you click outside.
            </Box>
          ) : null}
        </Box>
      </ClickAwayListener>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `By default, the component responds to the trailing events (click + touch end). However, you can configure it to respond to the leading events (mouse down + touch start).`,
        },
      },
    },
  },
)
