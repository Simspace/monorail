import React from 'react'
import type { StoryFn } from '@storybook/react'

import type { PopoutProps } from '@monorail/components'
import {
  Box,
  IconButton,
  Popout,
  Stack,
  Typography,
} from '@monorail/components'
import { OpenInNew } from '@monorail/components/icons'

export default {
  title: 'Utils/Popout',
  component: Popout,
}

const Template: StoryFn<Partial<PopoutProps>> = args => {
  const [isPopoutOpen, setPopoutOpen] = React.useState(false)
  return (
    <Box width={500}>
      {!isPopoutOpen && (
        <Stack direction="row" alignItems="center" gap={4}>
          <Typography>Click the button to open a popout window:</Typography>
          <IconButton
            aria-label="Open Popout"
            onClick={() => setPopoutOpen(true)}
          >
            <OpenInNew />
          </IconButton>
        </Stack>
      )}
      {isPopoutOpen && <Typography>Popout is currently open</Typography>}
      <Popout
        title="Console"
        onWindowClose={() => setPopoutOpen(false)}
        open={isPopoutOpen}
        {...args}
      >
        <Typography>This content is in the Popout</Typography>
      </Popout>
    </Box>
  )
}

export const Default = Template.bind({})
