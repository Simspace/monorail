/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import type { StoryObj } from '@storybook/react'

import { Button, FlexDrawer, Stack } from '@monorail/components'

export default {
  title: 'Navigation/FlexDrawer',
  component: FlexDrawer,
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: 400,
    },
    layout: 'fullscreen',
  },
}

export const Default: StoryObj<typeof FlexDrawer> = {
  render: args => {
    const [open, setOpen] = React.useState(false)
    return (
      <Stack direction="row">
        <FlexDrawer variant="persistent" open={open}>
          {args.children}
          <Button onClick={() => setOpen(!open)}>Toggle</Button>
        </FlexDrawer>
        <Button onClick={() => setOpen(!open)}>Toggle</Button>
      </Stack>
    )
  },
}
