// Edit this file to add new stories
import React from 'react'

import { story } from '../../../__tests__/helpers/storybook'
import { TableCell } from '../../TableCell/TableCell'
import { TableRow, TableRowProps } from '../TableRow'
import { defaultStoryMeta } from './TableRow.stories.gen'
import { Table } from '../../Table/Table'
import { TableBody } from '../../TableBody/TableBody'

export default { ...defaultStoryMeta, title: 'Data Display/Table/TableRow' }

const Template = story<TableRowProps>(args => (
  <Table>
    <TableBody>
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
        component: `TableRow wraps the cells for a single table row`,
      },
    },
  },
})
