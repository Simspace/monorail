// Edit this file to add new stories
import React from 'react'
import { TableBody, TableBodyProps } from '../TableBody'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './TableBody.stories.gen'
/**
 * Metadata for TableBody stories - update/extend as needed
 */
export default { ...defaultStoryMeta }
/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<TableBodyProps>(args => <TableBody {...args} />, {
  args: {},
})
/** Default story for TableBody (edit/remove by hand if needed) */
export const Default = story(Template)
// TODO: add more stories below
