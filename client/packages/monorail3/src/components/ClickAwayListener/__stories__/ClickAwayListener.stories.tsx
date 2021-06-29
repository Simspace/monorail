// Edit this file to add new stories
import React from 'react'
import { ClickAwayListener, ClickAwayListenerProps } from '../ClickAwayListener'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './ClickAwayListener.stories.gen'
import { Box } from '../../Box/Box'

/**
 * Metadata for ClickAwayListener stories - update/extend as needed
 * This is intended to be exported as story-level metadata from the main .stories.tsx file, like:
 * "export default { ...defaultStoryMeta } // Add/extend as needed
 */
export default { ...defaultStoryMeta }

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
    }
    return (
      <ClickAwayListener onClickAway={handleClickAway} {...args}>
        <Box sx={{ position: 'relative' }}>
          <button type="button" onClick={handleClick}>
            Open menu dropdown
          </button>
          {open ? (
            <Box sx={{}}>
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
export const Default = story(Template, {})
// TODO: add more stories below
