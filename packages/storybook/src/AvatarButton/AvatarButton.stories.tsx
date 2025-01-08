// Edit this file to add new stories
import React from 'react'
import { action } from '@storybook/addon-actions'

import type { AvatarButtonProps } from '@monorail/components'
import { AvatarButton, Stack } from '@monorail/components'
import { AccountGroup } from '@monorail/components/icons'

import { story } from '../helpers/storybook.js'

export default { title: 'Inputs/AvatarButton', component: AvatarButton }

const colors = ['primary', 'secondary', 'default', 'info', 'error', 'success', 'warning'] as const

const Template = story<AvatarButtonProps>(
  (args) => {
    return (
      <Stack direction='row' gap={2}>
        <AvatarButton {...args}>{args.children}</AvatarButton>
        <AvatarButton variant='rounded' {...args}>
          {args.children}
        </AvatarButton>
      </Stack>
    )
  },
  {
    args: {
      size: 'medium',
      color: 'secondary',
      disabled: false,
      children: 'WW',
      onClick: action('onClick'),
    },
  },
)

export const Default = story(Template)

export const Image = story(Template, {
  args: {
    alt: 'Good Boi',
    src: 'https://images.dog.ceo/breeds/labrador/n02099712_4323.jpg',
  },
})

export const Icon = story(Template, {
  args: {
    children: <AccountGroup />,
  },
})

export const Colors = story<AvatarButtonProps>(
  (args) => (
    <Stack direction='row' gap={2}>
      {colors.map((color) => (
        <AvatarButton {...args} key={color} color={color}>
          AB
        </AvatarButton>
      ))}
    </Stack>
  ),
  {
    args: {
      size: 'medium',
      disabled: false,
    },
    parameters: {
      docs: {
        description: {
          story: `Unlike Avatar, AvatarButton has a \`color\` prop that can be used to change its background color, hover state, and active state.`,
        },
      },
    },
  },
)
