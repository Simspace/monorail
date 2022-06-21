// Edit this file to add new stories
import React from 'react'

import { Box, Portal, PortalProps } from '../../..'
import { story } from '../../../test-helpers/storybook'
/**
 * Metadata for Portal stories - update/extend as needed
 */
export default { title: 'Utils/Portal', component: Portal }
/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<PortalProps>(
  args => {
    const [show, setShow] = React.useState(false)
    const container = React.useRef(null)

    const handleClick = () => {
      setShow(!show)
    }

    return (
      <>
        <button type="button" onClick={handleClick}>
          {show ? 'Unmount children' : 'Mount children'}
        </button>
        {show ? (
          <Portal container={container.current} {...args}>
            Portal Content
          </Portal>
        ) : null}
        <Box sx={{ p: 1, my: 1, border: '1px solid' }} ref={container} />
      </>
    )
  },
  { args: {} },
)
/** Default story for Portal (edit/remove by hand if needed) */
export const Default = story(Template, {
  parameters: {
    docs: {
      description: {
        component: `The portal component renders its children into a new "subtree" outside of current DOM hierarchy.`,
      },
    },
  },
})
// TODO: add more stories below
