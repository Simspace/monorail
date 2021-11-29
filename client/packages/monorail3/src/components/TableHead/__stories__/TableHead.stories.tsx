// Edit this file to add new stories
import React from 'react'
import { TableHead, TableHeadProps } from '../TableHead'
import { TableRow } from '../../TableRow/TableRow'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './TableHead.stories.gen'
import { TableCell } from '../../TableCell/TableCell'

export default { ...defaultStoryMeta, title: 'Data Display/Table/TableHead' }

const Template = story<TableHeadProps>(args => (
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
))

export const Default = story(Template, {
  parameters: {
    docs: {
      description: {
        component: `TableHead is a sub-component of Table which wraps the header row(s) of the Table`,
      },
    },
  },
})
