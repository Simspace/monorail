// Edit this file to add new stories
import React from 'react'
import { TableContainer, TableContainerProps } from '../TableContainer'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './TableContainer.stories.gen'
/**
 * Metadata for TableContainer stories - update/extend as needed
 */
export default { ...defaultStoryMeta }
/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<TableContainerProps>(
  args => <TableContainer {...args} />,
  { args: {} },
)
/** Default story for TableContainer (edit/remove by hand if needed) */
export const Default = story(Template)
// TODO: add more stories below
