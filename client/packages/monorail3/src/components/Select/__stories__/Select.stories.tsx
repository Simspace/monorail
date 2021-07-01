// Edit this file to add new stories
import React from 'react'
import { Select, SelectProps } from '../Select'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './Select.stories.gen'
/**
 * Metadata for Select stories - update/extend as needed
 */
export default { ...defaultStoryMeta }
/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<SelectProps>(args => <Select {...args} />, { args: {} })
/** Default story for Select (edit/remove by hand if needed) */
export const Default = story(Template)
// TODO: add more stories below
