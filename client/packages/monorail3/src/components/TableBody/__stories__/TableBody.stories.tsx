// Edit this file to add new stories
import React from 'react'
import { TableBody, TableBodyProps } from '../TableBody'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './TableBody.stories.gen'
import { TableCell } from '../../TableCell/TableCell'
import { TableRow } from '../../TableRow/TableRow'

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
const Template = story<TableBodyProps>(args => (
  <TableBody {...args}>
    <TableRow>
      <TableCell>Cell 1</TableCell>
      <TableCell>Cell 2</TableCell>
      <TableCell>Cell 3</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>Cell 1</TableCell>
      <TableCell>Cell 2</TableCell>
      <TableCell>Cell 3</TableCell>
    </TableRow>
  </TableBody>
))

/** Default story for TableBody (edit/remove by hand if needed) */
export const Default = story(Template, {
  parameters: {
    docs: {
      description: {
        component: `TableBody is a sub-component of Table, which wraps the body rows of the table`,
      },
    },
  },
})
