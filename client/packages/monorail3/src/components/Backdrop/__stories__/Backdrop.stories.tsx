// Edit this file to add new stories
import React from 'react'
import { Backdrop, BackdropProps } from '../Backdrop'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './Backdrop.storyHelpers'
/** Metadata for these stories - update/extend as needed */
export default { ...defaultStoryMeta }
/** Story template - update as needed */
const Template = story<BackdropProps>(
  args => <Backdrop open={true} {...args} />,
  {
    args: {},
  },
)
/** Default story (edit as needed) */
export const Default = story(Template, {})
// TODO: add more stories below
