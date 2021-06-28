// Edit this file to add new stories
import React from 'react'
import { Alert, AlertProps } from '../Alert'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './Alert.storyHelpers'
/** Metadata for these stories - update/extend as needed */
export default { ...defaultStoryMeta }
/** Story template - update as needed */
const Template = story<AlertProps>(args => <Alert {...args} />, { args: {} })
/** Default story (edit as needed) */
export const Default = story(Template, {})
// TODO: add more stories below
