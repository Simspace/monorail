// Edit this file to add new stories
import React from 'react'
import {
  BottomNavigationAction,
  BottomNavigationActionProps,
} from '../BottomNavigationAction'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './BottomNavigationAction.storyHelpers'
/** Metadata for these stories - update/extend as needed */
export default { ...defaultStoryMeta }
/** Story template - update as needed */
const Template = story<BottomNavigationActionProps>(
  args => (
    <BottomNavigationAction label={'Bottom Navigation Action'} {...args} />
  ),
  { args: {} },
)
/** Default story (edit as needed) */
export const Default = story(Template, {})
// TODO: add more stories below
