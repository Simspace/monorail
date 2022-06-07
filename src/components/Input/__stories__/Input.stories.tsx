// Edit this file to add new stories
import React from 'react'
import { Box, Input, InputProps } from '@mui/material'

import { story } from '../../../test-helpers/storybook'

/**
 * Metadata for Input stories - update/extend as needed
 */
export default { title: 'Inputs/Input', component: Input }

/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<InputProps>(
  args => <Input inputProps={{ 'aria-label': 'an input' }} {...args} />,
  {
    args: { placeholder: 'Placeholder text' },
  },
)

/** Default story for Input (edit/remove by hand if needed) */
export const Default = story(Template, {
  parameters: {
    docs: {
      description: {
        component:
          'Input is a low-level component that can be combined with other low-level components to create things like TextField',
      },
    },
  },
})

export const Showcase = story<InputProps>(
  () => {
    const ariaLabel = { 'aria-label': 'description' }

    return (
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <Input defaultValue="Hello world" inputProps={ariaLabel} />
        <Input placeholder="Placeholder" inputProps={ariaLabel} />
        <Input disabled defaultValue="Disabled" inputProps={ariaLabel} />
        <Input defaultValue="Error" error inputProps={ariaLabel} />
      </Box>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: 'This example shows off various Input props',
        },
      },
    },
  },
)
