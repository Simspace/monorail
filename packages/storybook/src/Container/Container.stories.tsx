// Edit this file to add new stories
import React from 'react'
import { grey } from '@mui/material/colors'

import type { ContainerProps } from '@monorail/components'
import {
  Box,
  Container,
  CssBaseline,
  Stack,
  Typography,
} from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default { title: 'Layout/Container', component: Container }

const Template = story<ContainerProps>(
  args => (
    <Container {...args}>
      <Box>
        <Stack direction="column" spacing={1}>
          <Typography>
            The container centers your content horizontally. It's the most basic
            layout element.
          </Typography>
          <Typography>
            While containers can be nested, most layouts do not require a nested
            container.
          </Typography>
        </Stack>
      </Box>
    </Container>
  ),
  {
    args: {},
    muiName: 'MuiContainer',
  },
)

/**
 * The container centers your content horizontally. It's the most basic layout element.
 */
export const Default = story<ContainerProps>(Template)

/**
 * A fluid container width is bounded by the `maxWidth` prop value.
 */
export const Fluid = story<ContainerProps>(() => {
  return (
    <>
      {/* This is probably not needed as all stories have the CssBaseline rendered as part of the storybook template */}
      <CssBaseline />
      <Stack direction="column" spacing={1}>
        <Container maxWidth="xs">
          <Box>The content (xs)</Box>
        </Container>
        <Container maxWidth="sm">
          <Box>The content (sm)</Box>
        </Container>
        <Container maxWidth="md">
          <Box>The content (md)</Box>
        </Container>
        <Container maxWidth="lg">
          <Box>The content (lg)</Box>
        </Container>
        <Container maxWidth="xl">
          <Box>The content (xl)</Box>
        </Container>
      </Stack>
    </>
  )
})

/**
 * A fluid container width is bounded by the `maxWidth` prop value.
 */
export const Fixed = story<ContainerProps>(() => {
  return (
    <>
      {/* This is probably not needed as all stories have the CssBaseline rendered as part of the storybook template */}
      <CssBaseline />
      <Container fixed>
        <Box sx={{ bgcolor: grey[200] }}>The content</Box>
      </Container>
    </>
  )
})
