// Edit this file to add new stories
import React from 'react'
import { TableRow, TableRowProps } from '../TableRow'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './TableRow.stories.gen'
import { TableCell } from '../../TableCell/TableCell'

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
const Template = story<TableRowProps>(args => (
  <TableRow>
    <TableCell>Cell 1</TableCell>
    <TableCell>Cell 2</TableCell>
    <TableCell>Cell 3</TableCell>
  </TableRow>
))

/** Default story for TableBody (edit/remove by hand if needed) */
export const Default = story(Template, {
  parameters: {
    docs: {
      description: {
        component: `TableRow wraps the cells for a single table row`,
      },
    },
  },
})
