// Edit this file to add new stories
import React from 'react'

import { story } from '../../../__tests__/helpers/storybook'
import { MenuItem } from '../../MenuItem/MenuItem'
import { MenuList, MenuListProps } from '../MenuList'
import { defaultStoryMeta } from './MenuList.stories.gen'
/**
 * Metadata for MenuList stories - update/extend as needed
 */
export default { ...defaultStoryMeta, title: 'Navigation/Menu/MenuList' }

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
