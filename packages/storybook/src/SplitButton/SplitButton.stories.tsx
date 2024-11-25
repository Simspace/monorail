import React from 'react'
import { Stack, useTheme } from '@mui/material'
import type { StoryFn } from '@storybook/react'

import type { SplitButtonProps } from '@monorail/components'
import { Box, SplitButton, Typography } from '@monorail/components'
import { capitalize } from '@monorail/utils'
import { isMeteorTheme } from '../helpers'

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

export const Colors = () => {
  const theme = useTheme()

  if (isMeteorTheme(theme.name)) {
    return <MeteorColors />
  }

  return (
    <Stack direction="column" gap={4}>
      <Template color="primary" variant="contained" />
      <Template color="secondary" variant="contained" />
      <Template color="error" variant="contained" />
      <Template color="success" variant="contained" />
      <Template color="warning" variant="contained" />
    </Stack>
  )
}

const MeteorColors = () => (
  <Stack direction="column" gap={4}>
    <Template color="primary" variant="contained" />
    <Template color="secondary" variant="outlined" />
    <Template color="error" variant="outlined" />
  </Stack>
)

export const Variants = () => {
  const theme = useTheme()

  if (isMeteorTheme(theme.name)) {
    return <MeteorVariants />
  }

  return (
    <React.Fragment>
      {variants.map(variant => {
        return (
          <Box key={variant}>
            <Typography variant="h1">{capitalize(variant)}</Typography>
            {colors.map(color => (
              <Stack
                direction="row"
                spacing={2}
                my={2}
                key={`${variant}-${color}`}
              >
                <Template variant={variant} color={color} size="medium">
                  {color}
                </Template>
                <Template
                  disabled
                  variant={variant}
                  color={color}
                  size="medium"
                >
                  {color}
                </Template>
              </Stack>
            ))}
          </Box>
        )
      })}
    </React.Fragment>
  )
}

const MeteorVariants = () => {
  return (
    <Stack gap={2}>
      <Typography variant="h1">Contained</Typography>
      <Stack direction="row" gap={2}>
        <Template variant="contained" color="primary">
          Primary
        </Template>
        <Template variant="contained" color="primary" disabled>
          Primary
        </Template>
      </Stack>
      <Typography variant="h1">Outlined</Typography>
      <Stack direction="row" gap={2}>
        <Template variant="outlined" color="secondary">
          Primary
        </Template>
        <Template variant="outlined" color="secondary" disabled>
          Primary
        </Template>
      </Stack>
      <Stack direction="row" gap={2}>
        <Template variant="outlined" color="error">
          Primary
        </Template>
        <Template variant="outlined" color="error" disabled>
          Primary
        </Template>
      </Stack>
    </Stack>
  )
}
