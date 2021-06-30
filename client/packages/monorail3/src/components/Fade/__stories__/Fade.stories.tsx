// Edit this file to add new stories
import React from 'react'
import { Fade, FadeProps } from '../Fade'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './Fade.stories.gen'
/**
 * Metadata for Fade stories - update/extend as needed
 */
export default { ...defaultStoryMeta }
/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<FadeProps>(args => <Fade {...args} />, { args: {} })
/** Default story for Fade (edit/remove by hand if needed) */
export const Default = story(Template)
// TODO: add more stories below
