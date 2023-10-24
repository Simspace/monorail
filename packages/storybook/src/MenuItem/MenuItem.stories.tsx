// Edit this file to add new stories
import React from 'react'

import type { MenuItemProps } from '@monorail/components'
import { MenuItem } from '@monorail/components'

import { story } from '../helpers/storybook.js'

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
    muiName: 'MuiMenuItem',
  },
)

/** Used primarily with the `Menu` component  */
export const Default = story(Template)
