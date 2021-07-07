// Edit this file to add new stories
import React from 'react'
import { Zoom, ZoomProps } from '../Zoom'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './Zoom.stories.gen'
/**
 * Metadata for Zoom stories - update/extend as needed
 */
export default { ...defaultStoryMeta }
/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<ZoomProps>(args => <Zoom {...args} />, { args: {} })
/** Default story for Zoom (edit/remove by hand if needed) */
export const Default = story(Template)
// TODO: add more stories below
