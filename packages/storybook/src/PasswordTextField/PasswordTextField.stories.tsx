import React from 'react'
import Box from '@mui/material/Box'
import { action } from '@storybook/addon-actions'
import type { StoryObj } from '@storybook/react'

import { PasswordTextField } from '@monorail/components'

export default {
  title: 'Inputs/PasswordTextField',
  component: PasswordTextField,
  args: {
    placeholder: 'Placeholder',
  },
}

export const Default: StoryObj<typeof PasswordTextField> = {
  render: args => (
    <Box component="form" width={300} autoComplete="off">
      <PasswordTextField label="PasswordTextField" {...args} />
    </Box>
  ),
}

export const ControlledVsUncontrolled: StoryObj<typeof PasswordTextField> = {
  render: args => {
    const { isVisible, ...restArgs } = args

    return (
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <PasswordTextField
          id="password-textfield-controlled"
          label="Controlled"
          defaultValue="foo"
          isVisible={isVisible}
          onVisibilityChange={action('onVisibilityChange')}
          {...restArgs}
        />
        <PasswordTextField
          id="password-textfield-uncontrolled"
          label="Uncontrolled"
          defaultValue="bar"
          onVisibilityChange={action('onVisibilityChange')}
          defaultIsVisible={false}
          {...restArgs}
        />
      </Box>
    )
  },
}
