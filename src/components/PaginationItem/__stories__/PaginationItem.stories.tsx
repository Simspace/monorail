import React from 'react'

import { PaginationItem, PaginationItemProps } from '../../..'
import { story } from '../../../test-helpers/storybook'

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
