// Edit this file to add new stories
import React from 'react'
import { Box, BoxProps, Button, Stack, Typography } from '@monorail/components'
import { styled } from '@mui/material'

import { story } from '../helpers/storybook'

/**
 * Metadata for Box stories - update/extend as needed
 * This is intended to be exported as story-level metadata from the main .stories.tsx file, like:
 * "export default { ...defaultStoryMeta } // Add/extend as needed
 */
export default { title: 'Layout/Box', component: Box }

const Template = story<BoxProps>(args => <Box {...args} />, {
  args: {
    px: 3,
    py: 4,
    children: "Hello, I'm a box! Use me for component containers!",
  },
})
/** Default story for Box */
export const Default = story(Template)

export const WaysToStyleABox = () => {
  const BorderedBox = styled(Box)(
    ({ theme }) => `
    border: 1px solid ${theme.palette.primary.main}
  `,
  )

  return (
    <Stack gap={2}>
      <Typography>
        Box can be styled multiple ways. They each have different usecases and{' '}
        <a
          target={'_blank'}
          href={
            'https://next.material-ui.com/system/basics/#performance-tradeoff'
          }
        >
          performance implications.
        </a>
      </Typography>
      <Typography>1. As a styled component</Typography>
      <BorderedBox>Hello!</BorderedBox>
      <pre>{`
import { styled } from '@monorail/components'

export const BorderedBox = styled(Box)(
  ({ theme }) => \`
  border: 1px solid \${theme.palette.primary.main}
\`
)`}</pre>

      <Typography>
        2. Via the MUI System (See full api{' '}
        <a
          target={'_blank'}
          href={'https://next.material-ui.com/system/properties/'}
        >
          here.
        </a>
        )
      </Typography>
      <Box mt={3} p={2} border={'1px solid black'}>
        my box content
      </Box>
      <pre>{`
() => (<Box mt={3} p={2} border={"1px solid black"}>my box content</Box>)
      `}</pre>

      <Typography>3. With the sx prop</Typography>
      <Box component="span" sx={{ p: 2, border: '1px dashed grey' }}>
        <Button>Save</Button>
      </Box>
      <pre>{`
() => (
  <Box component="span" sx={{ p: 2, border: '1px dashed grey' }}>
    <Button>Save</Button>
  </Box>
)`}</pre>
    </Stack>
  )
}
