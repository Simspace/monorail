import React from 'react'
import { story } from '../../../__tests__/helpers/storybook'
import { Button } from '../../Button/Button'
import { ButtonGroup, ButtonGroupProps } from '../ButtonGroup'

export default {
  title: 'Buttons/Button Group',
  component: ButtonGroup,
}

const Template = (args: ButtonGroupProps) => (
  <ButtonGroup {...args}>
    <Button variant="contained">Button 1</Button>
    <Button variant="contained">Button 2</Button>
    <Button variant="contained">Button 3</Button>
  </ButtonGroup>
)

const defaultArgs: ButtonGroupProps = {}

export const Default = story(Template, { args: defaultArgs })
