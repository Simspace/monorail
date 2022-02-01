// Edit this file to add new stories
import React from 'react'
import { TableCell, TableCellProps } from '@mui/material'

import { story } from '../../../__tests__/helpers/storybook'

export default { title: 'Data Display/Table/TableCell', component: TableCell }

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
