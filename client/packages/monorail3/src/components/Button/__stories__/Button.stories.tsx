import React from 'react'
import { action } from '@storybook/addon-actions'

import { story } from '../../../__tests__/helpers/storybook'
import { Button, ButtonProps } from '../Button'

export default {
  title: 'Buttons/Button',
  component: Button,
}

const defaultArgs: ButtonProps = {
  onClick: action('onClick'),
  children: 'Button',
}

const Template = story<ButtonProps>(args => <Button {...args} />, {
  args: defaultArgs,
})

export const Default = story(Template)

export const Variants = () => (
  <>
    <Button {...defaultArgs} variant="contained" />
    <Button {...defaultArgs} variant="outlined" />
    <Button {...defaultArgs} variant="text" />
  </>
)

export const Colors = () => (
  <>
    <Button {...defaultArgs} variant="contained" color="primary" />
    <Button {...defaultArgs} variant="outlined" color="primary" />
    <Button {...defaultArgs} variant="text" color="primary" />
    <br />
    <Button {...defaultArgs} variant="contained" color="secondary" />
    <Button {...defaultArgs} variant="outlined" color="secondary" />
    <Button {...defaultArgs} variant="text" color="secondary" />
    <br />
    <Button {...defaultArgs} variant="contained" color="inherit" />
    <Button {...defaultArgs} variant="outlined" color="inherit" />
    <Button {...defaultArgs} variant="text" color="inherit" />
  </>
)

export const Sizes = () => (
  <>
    <Button {...defaultArgs} variant="contained" size="extraSmall" />
    <Button {...defaultArgs} variant="contained" size="small" />
    <Button {...defaultArgs} variant="contained" size="medium" />
    <Button {...defaultArgs} variant="contained" size="large" />
  </>
)
