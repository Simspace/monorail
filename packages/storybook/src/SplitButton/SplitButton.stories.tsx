import React from 'react'
import { Stack } from '@mui/material'
import type { StoryFn } from '@storybook/react'

import type { SplitButtonProps } from '@monorail/components'
import { Box, SplitButton, Typography } from '@monorail/components'
import { capitalize } from '@monorail/utils'

export default {
  title: 'Inputs/SplitButton',
  component: SplitButton,
}

const colors = [
  'primary',
  'secondary',
  'success',
  'error',
  'warning',
  'info',
] as const
const variants = ['contained', 'outlined'] as const

const Template: StoryFn<Partial<SplitButtonProps>> = args => (
  <SplitButton
    {...args}
    options={[
      {
        label: 'Create a merge commit',
        onClick: () => {},
      },
      {
        label: 'Squash and merge',
        onClick: () => {},
      },
      {
        label: 'Rebase and merge',
        onClick: () => {},
      },
    ]}
    slotProps={{
      secondaryButton: {
        'aria-label': 'Open more options',
      },
    }}
  />
)

export const Default = Template.bind({})
Default.args = {
  variant: 'contained',
}

export const Colors = () => (
  <Stack direction="column" gap={4}>
    <Template color="primary" variant="contained" />
    <Template color="secondary" variant="contained" />
    <Template color="error" variant="contained" />
    <Template color="success" variant="contained" />
    <Template color="warning" variant="contained" />
  </Stack>
)

export const Variants = () => {
  return variants.map(variant => {
    return (
      <Box key={variant}>
        <Typography variant="h1">{capitalize(variant)}</Typography>
        {colors.map(color => (
          <Stack direction="row" spacing={2} my={2} key={`${variant}-${color}`}>
            <Template variant={variant} color={color} size="medium">
              {color}
            </Template>
            <Template disabled variant={variant} color={color} size="medium">
              {color}
            </Template>
          </Stack>
        ))}
      </Box>
    )
  })
}
