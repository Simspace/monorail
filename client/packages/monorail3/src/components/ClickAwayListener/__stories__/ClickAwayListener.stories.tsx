// Edit this file to add new stories
import React, { useState } from 'react'
import { ClickAwayListener, ClickAwayListenerProps } from '../ClickAwayListener'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './ClickAwayListener.storyHelpers'
import { Box } from '../../Box/Box'
/** Metadata for these stories - update/extend as needed */
export default { ...defaultStoryMeta }
/** Story template - update as needed */
const Template = story<ClickAwayListenerProps>(
  args => {
    const [isOpen, setIsOpen] = useState(false)

    return (
      <ClickAwayListener onClickAway={() => setIsOpen(false)} {...args}>
        <Box>
          <button type="button" onClick={() => setIsOpen(true)}>
            Open dropdown
          </button>
          {isOpen ? <Box>Click outside of this box to close</Box> : null}
        </Box>
      </ClickAwayListener>
    )
  },
  { args: {} },
)
/** Default story (edit as needed) */
export const Default = story(Template, {})
// TODO: add more stories below
