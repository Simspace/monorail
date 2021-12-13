// Edit this file to add new stories
import React from 'react'
import { TableBody, TableBodyProps } from '../TableBody'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './TableBody.stories.gen'
import { TableCell } from '../../TableCell/TableCell'
import { TableRow } from '../../TableRow/TableRow'
import { Table } from '../../Table/Table'

export default { ...defaultStoryMeta, title: 'Data Display/Table/TableBody' }

const Template = story<TableBodyProps>(args => (
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
))

export const Default = story(Template, {
  parameters: {
    docs: {
      description: {
        component: `TableBody is a sub-component of Table, which wraps the body rows of the table`,
      },
    },
  },
})
