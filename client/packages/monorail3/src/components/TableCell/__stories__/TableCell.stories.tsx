// Edit this file to add new stories
import React from 'react'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './TableCell.stories.gen'
import { TableCell, TableCellProps } from '../../TableCell/TableCell'

export default { ...defaultStoryMeta }

const Template = story<TableCellProps>(args => (
  <TableCell {...args}>Cell 1</TableCell>
))

export const Default = story(Template, {
  parameters: {
    docs: {
      description: {
        component: `TableCell is a sub-component of Table, which wraps the contents of a table cell`,
      },
    },
  },
})
