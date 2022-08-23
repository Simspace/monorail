// Edit this file to add new stories
import React from 'react'
import {
  Box,
  Container,
  ContainerProps,
  CssBaseline,
  Stack,
  Typography,
} from '@monorail/components'
import { grey } from '@mui/material/colors'

import { story } from '../helpers/storybook.js'

/**
 * Metadata for Container stories - update/extend as needed
 * This is intended to be exported as story-level metadata from the main .stories.tsx file, like:
 * "export default { ...defaultStoryMeta } // Add/extend as needed
 */
export default { title: 'Layout/Container', component: Container }

/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<ContainerProps>(
  args => (
    <Container {...args}>
      <Box /*backgroundColor={grey[200]}*/>
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

/** Default story for Container (edit/remove by hand if needed) */
/**
 * The docs
 */
export const Default = story<ContainerProps>(Template, {
  parameters: {
    docs: {
      description: {
        story: `The container centers your content horizontally. It's the most basic layout element.`,
      },
    },
  },
})

export const Fluid = story<ContainerProps>(
  () => {
    return (
      <>
        {/* This is probably not needed as all stories have the CssBaseline rendered as part of the storybook template */}
        <CssBaseline />
        <Stack direction="column" spacing={1}>
          <Container maxWidth="xs">
            <Box /*backgroundColor={grey[200]}*/>The content (xs)</Box>
          </Container>
          <Container maxWidth="sm">
            <Box /*backgroundColor={grey[200]}*/>The content (sm)</Box>
          </Container>
          <Container maxWidth="md">
            <Box /*backgroundColor={grey[200]}*/>The content (md)</Box>
          </Container>
          <Container maxWidth="lg">
            <Box /*backgroundColor={grey[200]}*/>The content (lg)</Box>
          </Container>
          <Container maxWidth="xl">
            <Box /*backgroundColor={grey[200]}*/>The content (xl)</Box>
          </Container>
        </Stack>
      </>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `A fluid container width is bounded by the \`maxWidth\` prop value.`,
        },
      },
    },
  },
)

export const Fixed = story<ContainerProps>(
  () => {
    return (
      <>
        {/* This is probably not needed as all stories have the CssBaseline rendered as part of the storybook template */}
        <CssBaseline />
        <Container fixed>
          <Box sx={{ bgcolor: grey[200] }}>The content</Box>
        </Container>
      </>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `A fluid container width is bounded by the \`maxWidth\` prop value.`,
        },
      },
    },
  },
)
