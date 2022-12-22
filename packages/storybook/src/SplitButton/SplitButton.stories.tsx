import React from 'react'
import { Stack } from '@mui/material'
import type { Story } from '@storybook/react'

import type { SplitButtonProps } from '@monorail/components'
import { SplitButton } from '@monorail/components'

export default {
  title: 'Inputs/SplitButton',
  component: SplitButton,
}

const Template: Story<Partial<SplitButtonProps>> = args => (
  <SplitButton
    {...args}
    options={[
      {
        title: 'Create a merge commit',
        onClick: () => {},
      },
      {
        title: 'Squash and merge',
        onClick: () => {},
      },
      {
        title: 'Rebase and merge',
        onClick: () => {},
      },
    ]}
    componentsProps={{
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

export const Sizes = () => (
  <Stack direction="column" gap={4}>
    <Template size="small" variant="contained" />
    <Template size="medium" variant="contained" />
    <Template size="large" variant="contained" />
  </Stack>
)