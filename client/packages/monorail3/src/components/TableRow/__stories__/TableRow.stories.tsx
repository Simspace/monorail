// Edit this file to add new stories
import React from 'react'

import { story } from '../../../__tests__/helpers/storybook'
import { TableCell } from '../../TableCell/TableCell'
import { TableRow, TableRowProps } from '../TableRow'
import { defaultStoryMeta } from './TableRow.stories.gen'

export default { ...defaultStoryMeta, title: 'Data Display/Table/TableRow' }

const Template = story<TableRowProps>(args => (
  <TableRow>
    <TableCell>Cell 1</TableCell>
    <TableCell>Cell 2</TableCell>
    <TableCell>Cell 3</TableCell>
  </TableRow>
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
