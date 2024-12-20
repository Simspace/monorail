// Edit this file to add new stories
import React from 'react'

import type { TableRowProps } from '@monorail/components'
import { Table, TableBody, TableCell, TableRow } from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default { title: 'Data Display/Table/TableRow', component: TableRow }

const Template = story<TableRowProps>(
  (args) => (
    <Table>
      <TableBody>
        <TableRow {...args}>
          <TableCell>Cell 1</TableCell>
          <TableCell>Cell 2</TableCell>
          <TableCell>Cell 3</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
  { muiName: 'MuiTableRow' },
)

export const Default = story(Template, {
  parameters: {
    docs: {
      description: {
        component: `TableRow wraps the cells for a single table row`,
      },
    },
  },
})
