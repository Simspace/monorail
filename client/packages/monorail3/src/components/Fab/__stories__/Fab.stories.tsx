// Edit this file to add new stories
import React from 'react'
import { Fab, FabProps } from '../Fab'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './Fab.stories.gen'
/**
 * Metadata for Fab stories - update/extend as needed
 */
export default { ...defaultStoryMeta }
/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<FabProps>(args => <Fab {...args}>FAB</Fab>, { args: {} })
/** Default story for Fab (edit/remove by hand if needed) */
export const Default = story(Template, {})
// TODO: add more stories below
