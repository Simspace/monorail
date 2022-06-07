// Edit this file to add new stories
import React from 'react'
import { MenuItem, MenuItemProps } from '@mui/material'

import { story } from '../../../test-helpers/storybook'
/**
 * Metadata for MenuItem stories - update/extend as needed
 */
export default { title: 'Navigation/Menu/MenuItem', component: MenuItem }

const Template = story<MenuItemProps>(
  args => (
    <div role="menu">
      <MenuItem {...args} />
    </div>
  ),
  {
    args: {
      children: 'Item 1',
    },
  },
)

/** Used primarily with the `Menu` component  */
export const Default = story(Template)
