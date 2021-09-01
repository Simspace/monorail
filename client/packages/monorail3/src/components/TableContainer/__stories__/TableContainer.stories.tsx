// Edit this file to add new stories
import React from 'react'
import { TableBody } from '../../TableBody/TableBody'
import { TableContainer, TableContainerProps } from '../TableContainer'
import { TableRow } from '../../TableRow/TableRow'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './TableContainer.stories.gen'
import { TableCell } from '../../TableCell/TableCell'
import { Table } from '../../Table/Table'

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
const Template = story<TableContainerProps>(args => (
  <TableContainer {...args}>
    <Table>
      <TableBody>
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
    </Table>
  </TableContainer>
))

/** Default story for TableBody (edit/remove by hand if needed) */
export const Default = story(Template, {
  parameters: {
    docs: {
      description: {
        component: `TableContainer is a sub-component of Table, which wraps the entire Table. This can be used to control how the Table is rendered as a whole, like in a Paper component.`,
      },
    },
  },
})
