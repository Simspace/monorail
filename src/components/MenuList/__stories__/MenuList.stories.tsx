// Edit this file to add new stories
import React from 'react'

import { MenuItem, MenuList, MenuListProps } from '../../..'
import { story } from '../../../test-helpers/storybook'
/**
 * Metadata for MenuList stories - update/extend as needed
 */
export default { title: 'Navigation/Menu/MenuList', component: MenuList }

const Template = story<MenuListProps>(
  args => (
    <MenuList {...args}>
      <MenuItem>Item 1</MenuItem>
      <MenuItem>Item 2</MenuItem>
      <MenuItem>Item 3</MenuItem>
    </MenuList>
  ),
  {
    args: {},
  },
)

/** Used in conjunction with the `Menu` component */
export const Default = story(Template)
