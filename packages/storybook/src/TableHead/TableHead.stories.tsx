// Edit this file to add new stories
import React from 'react'

import type { TableHeadProps } from '@monorail/components'
import { Table, TableCell, TableHead, TableRow } from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default { title: 'Data Display/Table/TableHead', component: TableHead }

const Template = story<TableHeadProps>(
  args => (
    <Table>
      <TableHead {...args}>
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
      </TableHead>
    </Table>
  ),
  { muiName: 'MuiTableHead' },
)

export const Default = story(Template, {
  parameters: {
    docs: {
      description: {
        component: `TableHead is a sub-component of Table which wraps the header row(s) of the Table`,
      },
    },
  },
})
