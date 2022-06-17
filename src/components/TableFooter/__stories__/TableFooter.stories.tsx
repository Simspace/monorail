// Edit this file to add new stories
import React from 'react'

import {
  Table,
  TableCell,
  TableFooter,
  TableFooterProps,
  TableRow,
} from '../../..'
import { story } from '../../../test-helpers/storybook'

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
