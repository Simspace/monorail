// Edit this file to add new stories
import React from 'react'
import { styled } from '@mui/material'
import type { Meta } from '@storybook/react'

import type { BoxProps } from '@monorail/components'
import { Box, Button, Stack, Typography } from '@monorail/components'

import { story } from '../helpers/storybook.js'

const meta: Meta<typeof Box> = { title: 'Layout/Box', component: Box }

export default meta

const Template = story<BoxProps>(args => <Box {...args} />, {
  args: {
    px: 3,
    py: 4,
    children: "Hello, I'm a box! Use me for component containers!",
  },
})

export const Default = story(Template)

export const WaysToStyleABox = () => {
  const BorderedBox = styled('div')(
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

export const BorderedBox = styled('div')(
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
