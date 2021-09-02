// Edit this file to add new stories
import React from 'react'
import { TableRow, TableRowProps } from '../TableRow'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './TableRow.stories.gen'
import { TableCell } from '../../TableCell/TableCell'

export default { ...defaultStoryMeta }

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
