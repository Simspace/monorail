import React from 'react'
import { PaginationItem, PaginationItemProps } from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default {
  title: 'Navigation/PaginationItem',
  component: PaginationItem,
}

const Template = story<PaginationItemProps>(
  args => <PaginationItem {...args} />,
  {
    args: { page: 1 },
    muiName: 'MuiPaginationItem',
  },
)

export const Default = story(Template)
