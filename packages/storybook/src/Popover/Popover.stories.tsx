// Edit this file to add new stories
import React from 'react'
import { Button, Popover, PopoverProps } from '@monorail/components'
import { Box, Typography } from '@mui/material'

import { story } from '../helpers/storybook.js'

/**
 * Metadata for Popover stories - update/extend as needed
 */
export default { title: 'Utils/Popover', component: Popover }
/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<PopoverProps>(
  args => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
      null,
    )
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
      setAnchorEl(null)
    }
    const open = Boolean(anchorEl)
    const id = open ? 'simple-popover' : undefined
    return (
      <>
        <Button aria-describedby={id} variant="contained" onClick={handleClick}>
          Open Popover
        </Button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          {...args}
        >
          <Box padding={2}>
            <Typography>Popover Content</Typography>
          </Box>
        </Popover>
      </>
    )
  },
  {
    args: {},
    parameters: {
      docs: {
        description: {
          component: `A Popover can be used to display some content on top of another.`,
        },
      },
    },
    muiName: 'MuiPopover',
  },
)
/** Default story for Popover (edit/remove by hand if needed) */
export const Default = story(Template)
// TODO: add more stories below

export const Hover = story(
  () => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null)

    const handlePopoverOpen = (
      event: React.MouseEvent<HTMLElement, MouseEvent>,
    ) => {
      setAnchorEl(event.currentTarget)
    }

    const handlePopoverClose = () => {
      setAnchorEl(null)
    }

    const open = Boolean(anchorEl)
    return (
      <>
        <span
          aria-owns={open ? 'mouse-over-popover' : undefined}
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
        >
          Hover with a Popover.
        </span>
        <Popover
          id="mouse-over-popover"
          sx={{
            pointerEvents: 'none',
          }}
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          onClose={handlePopoverClose}
          disableRestoreFocus
        >
          <Box padding={2}>
            <Typography>Popover Content</Typography>
          </Box>
        </Popover>
      </>
    )
  },
  {
    parameters: {
      docs: {
        storyDescription: `This demo demonstrates how to use the Popover component and the mouseover event to achieve popover behavior.`,
      },
    },
  },
)
