// Edit this file to add new stories
import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableContainerProps,
  TableRow,
} from '@mui/material'

import { story } from '../../../__tests__/helpers/storybook'

export default {
  title: 'Data Display/Table/TableContainer',
  component: TableContainer,
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
