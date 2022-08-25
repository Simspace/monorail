// Edit this file to add new stories
import React from 'react'

import type { TableSortLabelProps } from '@monorail/components'
import { TableSortLabel } from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default {
  title: 'Data Display/Table/TableSortLabel',
  component: TableSortLabel,
}

const Template = story<TableSortLabelProps>(
  args => {
    const [direction, setDirection] = React.useState<'asc' | 'desc'>('asc')

    return (
      <TableSortLabel
        direction={direction}
        onClick={() => setDirection(direction === 'asc' ? 'desc' : 'asc')}
        {...args}
      />
    )
  },
  { args: { children: 'Title' }, muiName: 'MuiTableSortLabel' },
)

export const Default = story(Template, {
  parameters: {
    docs: {
      description: {
        component: `TableSortLabel is a button used for toggling the sort direction on a column`,
      },
    },
  },
})
