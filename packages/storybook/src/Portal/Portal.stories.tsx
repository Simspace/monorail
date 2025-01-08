// Edit this file to add new stories
import React from 'react'

import type { PortalProps } from '@monorail/components'
import { Box, Portal } from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default { title: 'Utils/Portal', component: Portal }

const Template = story<PortalProps>(
  (args) => {
    const [show, setShow] = React.useState(false)
    const container = React.useRef(null)

    const handleClick = () => {
      setShow(!show)
    }

    return (
      <>
        <button type='button' onClick={handleClick}>
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

/**
 * The portal component renders its children into a new "subtree" outside of current DOM hierarchy.
 */
export const Default = story(Template)
