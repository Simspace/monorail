import React from 'react'
import { action } from '@storybook/addon-actions'

import { meta, story } from '../../../testHelpers/storybook'
import { Button, ButtonProps } from '../Button'
import META from './Button.meta.json'

export default meta(META, { title: 'Buttons/Button' })

const Template = story<ButtonProps>(args => <Button {...args} />, {
  args: {
    onClick: action('onClick'),
    children: 'Click me',
  },
})

export const Basic = story(Template)

export const Contained = story(Template, {
  args: { variant: 'contained' },
})

export const Outlined = story(Template, {
  args: { variant: 'outlined' },
})

export const Text = story(Template, {
  args: { variant: 'text' },
})
