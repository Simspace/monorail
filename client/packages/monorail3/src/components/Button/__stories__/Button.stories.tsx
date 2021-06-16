import React from 'react'
import { action } from '@storybook/addon-actions'

import { story } from '../../../__tests__/storybook'
import { Button, ButtonProps } from '../Button'

export default {
  title: 'Buttons/Button',
  component: Button,
}

// Setup the Template like this, so it works with the storybook Docs/Controls. Other vanilla demos can be propless components in `Button.demo.tsx`
const Template = story<ButtonProps>(args => <Button {...args} />, {
  args: {
    onClick: action('onClick'),
    children: 'Click me',
  },
})

export const Default = story(Template)

export * from '../__tests__/Button.demo'
