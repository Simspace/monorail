import React from 'react'
import type { StoryFn } from '@storybook/react'
import { loremIpsum } from 'lorem-ipsum'

import type { ResizableContainerProps } from '@monorail/components'
import {
  Box,
  ResizableContainer,
  ResizableElement,
  Typography,
} from '@monorail/components'
import { ResizableHandle } from '@monorail/components/ResizableHandle'

export default {
  title: 'Utils/ResizableContainer',
  component: ResizableContainer,
}

const Template: StoryFn<Partial<ResizableContainerProps>> = args => {
  return (
    <Box height={500}>
      <ResizableContainer orientation="vertical" {...args}>
        <ResizableElement size={300} minSize="10%">
          <Box overflow="hidden">
            <Box p={4}>
              <Typography>{loremIpsum({ count: 10 })}</Typography>
            </Box>
          </Box>
        </ResizableElement>
        <ResizableHandle propagate />
        <ResizableElement minSize="30%">
          <Box overflow="hidden">
            <Box p={4}>
              <Typography>{loremIpsum({ count: 10 })}</Typography>
            </Box>
          </Box>
        </ResizableElement>
        <ResizableHandle propagate />
        <ResizableElement minSize="40%">
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

export const Default: StoryFn<Partial<ResizableContainerProps>> = Template.bind(
  {},
)

Default.parameters = {
  layout: 'fullscreen',
}

export const Horizontal: StoryFn<Partial<ResizableContainerProps>> = args => (
  <div style={{ height: '600px', padding: '16px' }}>
    <ResizableContainer orientation="horizontal" {...args}>
      <ResizableElement>
        <Box height="100%" overflow="hidden">
          <Box p={4}>
            <Typography>{loremIpsum({ count: 10 })}</Typography>
          </Box>
        </Box>
      </ResizableElement>
      <ResizableHandle />
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
      <ResizableHandle />
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
            <ResizableHandle />
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
