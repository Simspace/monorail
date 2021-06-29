// Edit this file to add new stories
import React from 'react'
import { Chip, ChipProps } from '../Chip'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './Chip.stories.gen'
/**
 * Metadata for Chip stories - update/extend as needed
 * This is intended to be exported as story-level metadata from the main .stories.tsx file, like:
 * "export default { ...defaultStoryMeta } // Add/extend as needed
 */
export default { ...defaultStoryMeta }
/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<ChipProps>(args => <Chip {...args} />, { args: {} })
/** Default story for Chip (edit/remove by hand if needed) */
export const Default = story(Template, {})
// TODO: add more stories below
