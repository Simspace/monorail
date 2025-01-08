// Edit this file to add new stories
import React from 'react'

import type { TableBodyProps } from '@monorail/components'
import { Table, TableBody, TableCell, TableRow } from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default { title: 'Data Display/Table/TableBody', component: TableBody }

const Template = story<TableBodyProps>(
  (args) => (
    <Table>
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
    </Table>
  ),
  { muiName: 'MuiTableBody' },
)

export const Default = story(Template, {
  parameters: {
    docs: {
      description: {
        component: `TableBody is a sub-component of Table, which wraps the body rows of the table`,
      },
    },
  },
})
