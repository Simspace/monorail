// Edit this file to add new stories
import React from 'react'

import type { TableCellProps } from '@monorail/components'
import { TableCell } from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default { title: 'Data Display/Table/TableCell', component: TableCell }

const Template = story<TableCellProps>(
  args => <TableCell {...args}>Cell 1</TableCell>,
  { muiName: 'MuiTableCell' },
)

export const Default = story(Template, {
  parameters: {
    docs: {
      description: {
        component: `TableCell is a sub-component of Table, which wraps the contents of a table cell`,
      },
    },
  },
})
