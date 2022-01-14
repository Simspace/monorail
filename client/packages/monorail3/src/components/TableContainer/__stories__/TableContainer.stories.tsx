// Edit this file to add new stories
import React from 'react'

import { story } from '../../../__tests__/helpers/storybook'
import { Table } from '../../Table/Table'
import { TableBody } from '../../TableBody/TableBody'
import { TableCell } from '../../TableCell/TableCell'
import { TableRow } from '../../TableRow/TableRow'
import { TableContainer, TableContainerProps } from '../TableContainer'
import { defaultStoryMeta } from './TableContainer.stories.gen'

export default {
  ...defaultStoryMeta,
  title: 'Data Display/Table/TableContainer',
}

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

export const Default = story(Template, {
  parameters: {
    docs: {
      description: {
        component: `TableContainer is a sub-component of Table, which wraps the entire Table. This can be used to control how the Table is rendered as a whole, like in a Paper component.`,
      },
    },
  },
})
