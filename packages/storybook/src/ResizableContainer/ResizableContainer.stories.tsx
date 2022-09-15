import React from 'react'
import type { Story } from '@storybook/react'
import { loremIpsum } from 'lorem-ipsum'

import type { ResizableContainerProps } from '@monorail/components'
import {
  Box,
  ResizableContainer,
  ResizableElement,
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
          <Box overflow="hidden">
            <Box p={4}>
              <Typography>{loremIpsum({ count: 10 })}</Typography>
            </Box>
          </Box>
        </ResizableElement>
        <ResizeHandle />
        <ResizableElement>
          <Box overflow="hidden">
            <Box p={4}>
              <Typography>{loremIpsum({ count: 10 })}</Typography>
            </Box>
          </Box>
        </ResizableElement>
        <ResizeHandle propagate />
        <ResizableElement>
          <Box overflow="hidden">
            <Box p={4}>
              <Typography>{loremIpsum({ count: 10 })}</Typography>
            </Box>
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
    <ResizableContainer orientation="horizontal" {...args}>
      <ResizableElement>
        <Box height="100%" overflow="hidden">
          <Box p={4}>
            <Typography>{loremIpsum({ count: 10 })}</Typography>
          </Box>
        </Box>
      </ResizableElement>
      <ResizeHandle />
      <ResizableElement>
        <Box height="100%" overflow="hidden">
          <Box p={4}>
            <Typography>{loremIpsum({ count: 10 })}</Typography>
          </Box>
        </Box>
      </ResizableElement>
    </ResizableContainer>
  </div>
)

export const Both = () => (
  <div style={{ height: '600px', padding: '16px' }}>
    <ResizableContainer orientation="vertical">
      <ResizableElement>
        <Box overflow="hidden">
          <Box p={4}>
            <Typography>{loremIpsum({ count: 10 })}</Typography>
          </Box>
        </Box>
      </ResizableElement>
      <ResizeHandle />
      <ResizableElement minSize="25%">
        <Box height="100%">
          <ResizableContainer orientation="horizontal">
            <ResizableElement>
              <Box height="100%" overflow="hidden">
                <Box p={4}>
                  <Typography>{loremIpsum({ count: 10 })}</Typography>
                </Box>
              </Box>
            </ResizableElement>
            <ResizeHandle />
            <ResizableElement>
              <Box height="100%" overflow="hidden">
                <Box p={4}>
                  <Typography>{loremIpsum({ count: 10 })}</Typography>
                </Box>
              </Box>
            </ResizableElement>
          </ResizableContainer>
        </Box>
      </ResizableElement>
    </ResizableContainer>
  </div>
)
