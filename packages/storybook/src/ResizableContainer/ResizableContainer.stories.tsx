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
      <ResizableContainer id="resizable-group-1" direction="row" {...args}>
        <ResizableElement
          id="resizable-group-1-1"
          defaultSize={300}
          minSize={100}
        >
          <Box overflow="hidden">
            <Box p={4}>
              <Typography>{loremIpsum({ count: 10 })}</Typography>
            </Box>
          </Box>
        </ResizableElement>
        <ResizableHandle />
        <ResizableElement id="resizable-group-1-2" minSize="30%">
          <Box overflow="hidden">
            <Box p={4}>
              <Typography>{loremIpsum({ count: 10 })}</Typography>
            </Box>
          </Box>
        </ResizableElement>
        <ResizableHandle />
        <ResizableElement id="resizable-group-1-3" minSize="20%">
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
    <ResizableContainer id="resizable-group-2" direction="column" {...args}>
      <ResizableElement id="resizable-group-2-1">
        <Box height="100%" overflow="hidden">
          <Box p={4}>
            <Typography>{loremIpsum({ count: 10 })}</Typography>
          </Box>
        </Box>
      </ResizableElement>
      <ResizableHandle />
      <ResizableElement id="resizable-group-2-2">
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
    <ResizableContainer id="resizable-group-3" direction="row">
      <ResizableElement id="resizable-group-3-1">
        <Box overflow="hidden">
          <Box p={4}>
            <Typography>{loremIpsum({ count: 10 })}</Typography>
          </Box>
        </Box>
      </ResizableElement>
      <ResizableHandle />
      <ResizableElement id="resizable-group-3-2" minSize="25%">
        <Box height="100%">
          <ResizableContainer id="resizable-group-4" direction="column">
            <ResizableElement id="resizable-group-4-1">
              <Box height="100%" overflow="hidden">
                <Box p={4}>
                  <Typography>{loremIpsum({ count: 10 })}</Typography>
                </Box>
              </Box>
            </ResizableElement>
            <ResizableHandle />
            <ResizableElement id="resizable-group-4-2">
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
