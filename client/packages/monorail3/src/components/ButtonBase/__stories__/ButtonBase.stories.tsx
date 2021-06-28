// Edit this file to add new stories
import React from 'react'
import { ButtonBase, ButtonBaseProps } from '../ButtonBase'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './ButtonBase.storyHelpers'
/** Metadata for these stories - update/extend as needed */
export default { ...defaultStoryMeta }
/** Story template - update as needed */
const Template = story<ButtonBaseProps>(
  args => <ButtonBase {...args}>Button Base</ButtonBase>,
  {
    args: {},
  },
)
/** Default story (edit as needed) */
export const Default = story(Template, {})
// TODO: add more stories below
