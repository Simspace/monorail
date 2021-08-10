// Edit this file to add new stories
import React from 'react'
import { Popover, PopoverProps } from '../Popover'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './Popover.stories.gen'
import { Button } from '../../Button/Button'
/**
 * Metadata for Popover stories - update/extend as needed
 */
export default { ...defaultStoryMeta }
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
            horizontal: 'center',
          }}
          {...args}
        >
          Popover Content
        </Popover>
      </>
    )
  },
  {
    args: {},
  },
)
/** Default story for Popover (edit/remove by hand if needed) */
export const Default = story(Template)
// TODO: add more stories below
