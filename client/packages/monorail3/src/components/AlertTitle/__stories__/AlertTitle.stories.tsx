// Edit this file to add new stories
import React from 'react'
import { AlertTitle, AlertTitleProps } from '../AlertTitle'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './AlertTitle.storyHelpers'
/** Metadata for these stories - update/extend as needed */
export default { ...defaultStoryMeta }
/** Story template - update as needed */
const Template = story<AlertTitleProps>(args => <AlertTitle {...args} />, {
  args: {},
})
/** Default story (edit as needed) */
export const Default = story(Template, {})
// TODO: add more stories below
