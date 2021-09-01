// Edit this file to add new stories
import React from 'react'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './TableCell.stories.gen'
import { TableCell, TableCellProps } from '../../TableCell/TableCell'

/**
 * Metadata for TableCell stories - update/extend as needed
 */
export default { ...defaultStoryMeta }

/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<TableCellProps>(args => (
  <TableCell {...args}>Cell 1</TableCell>
))

/** Default story for TableBody (edit/remove by hand if needed) */
export const Default = story(Template, {
  parameters: {
    docs: {
      description: {
        component: `TableCell is a sub-component of Table, which wraps the contents of a table cell`,
      },
    },
  },
})
