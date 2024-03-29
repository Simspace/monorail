// Edit this file to add new stories
import React from 'react'

import type { TableFooterProps } from '@monorail/components'
import { Table, TableCell, TableFooter, TableRow } from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default {
  title: 'Data Display/Table/TableFooter',
  component: TableFooter,
}

const Template = story<TableFooterProps>(
  args => (
    <Table>
      <TableFooter {...args}>
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
      </TableFooter>
    </Table>
  ),
  { muiName: 'MuiTableFooter' },
)

export const Default = story(Template, {
  parameters: {
    docs: {
      description: {
        component: `TableFooter is a sub-component of Table which wraps the footer row(s) of the Table`,
      },
    },
  },
})
