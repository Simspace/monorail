// Edit this file to add new stories
import React from 'react'
import { Avatar, AvatarProps } from '../Avatar'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './Avatar.storyHelpers'
/** Metadata for these stories - update/extend as needed */
export default { ...defaultStoryMeta }
/** Story template - update as needed */
const Template = story<AvatarProps>(args => <Avatar {...args} />, { args: {} })
/** Default story (edit as needed) */
export const Default = story(Template, {})
// TODO: add more stories below
