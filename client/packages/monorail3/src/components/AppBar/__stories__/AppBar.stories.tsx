// Edit this file to add new stories
import React from 'react'
import { AppBar, AppBarProps } from '../AppBar'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './AppBar.storyHelpers'
/** Metadata for these stories - update/extend as needed */
export default { ...defaultStoryMeta }
/** Story template - update as needed */
const Template = story<AppBarProps>(args => <AppBar {...args} />, { args: {} })
/** Default story (edit as needed) */
export const Default = story(Template, {})
// TODO: add more stories below
