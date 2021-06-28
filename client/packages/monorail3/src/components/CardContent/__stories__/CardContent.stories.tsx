// Edit this file to add new stories
import React from 'react'
import { CardContent, CardContentProps } from '../CardContent'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './CardContent.storyHelpers'
/** Metadata for these stories - update/extend as needed */
export default { ...defaultStoryMeta }
/** Story template - update as needed */
const Template = story<CardContentProps>(args => <CardContent {...args} />, {
  args: {},
})
/** Default story (edit as needed) */
export const Default = story(Template, {})
// TODO: add more stories below
