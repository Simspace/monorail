import React from 'react'
import type { Story } from '@storybook/react'
import { loremIpsum } from 'lorem-ipsum'

import type { ResizableContainerProps } from '@monorail/components'
import {
  Box,
  ResizableContainer,
  ResizableElement,
  Stack,
  Typography,
} from '@monorail/components'
import { ResizeHandle } from '@monorail/components/ResizeHandle'

export default {
  title: 'Utils/ResizableContainer',
  component: ResizableContainer,
}

const Template: Story<Partial<ResizableContainerProps>> = args => {
  return (
    <Box height={500}>
      <ResizableContainer orientation="vertical" {...args}>
        <ResizableElement size={300} minSize="20%">
          <Box p={4}>
            <Typography>{loremIpsum({ count: 10 })}</Typography>
          </Box>
        </ResizableElement>
        <ResizeHandle />
        <ResizableElement>
          <Box p={4}>
            <Typography>{loremIpsum({ count: 10 })}</Typography>
          </Box>
        </ResizableElement>
        <ResizeHandle propagate />
        <ResizableElement>
          <Box p={4}>
            <Typography>{loremIpsum({ count: 10 })}</Typography>
          </Box>
        </ResizableElement>
      </ResizableContainer>
    </Box>
  )
}

export const Default: Story<Partial<ResizableContainerProps>> = Template.bind(
  {},
)

Default.parameters = {
  layout: 'fullscreen',
}

export const Horizontal: Story<Partial<ResizableContainerProps>> = args => (
  <div style={{ height: '600px', padding: '16px' }}>
    <Stack height="100%" width="100%" direction="column-reverse">
      <ResizableContainer orientation="horizontal" {...args}>
        <ResizableElement>
          <Box sx={{ padding: '16px' }}>
            <Typography>{loremIpsum({ count: 10 })}</Typography>
          </Box>
        </ResizableElement>
        <ResizeHandle />
        <ResizableElement>
          <Box sx={{ padding: '16px' }}>
            <Typography>{loremIpsum({ count: 10 })}</Typography>
          </Box>
        </ResizableElement>
      </ResizableContainer>
    </Stack>
  </div>
)
