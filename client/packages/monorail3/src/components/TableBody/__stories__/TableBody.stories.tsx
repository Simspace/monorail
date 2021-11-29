// Edit this file to add new stories
import React from 'react'

import { story } from '../../../__tests__/helpers/storybook'
import { TableCell } from '../../TableCell/TableCell'
import { TableRow } from '../../TableRow/TableRow'
import { TableBody, TableBodyProps } from '../TableBody'
import { defaultStoryMeta } from './TableBody.stories.gen'

export default { ...defaultStoryMeta, title: 'Data Display/Table/TableBody' }

const Template = story<TableBodyProps>(args => (
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
