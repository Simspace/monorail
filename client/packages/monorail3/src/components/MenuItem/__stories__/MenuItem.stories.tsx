// Edit this file to add new stories
import React from 'react'

import { story } from '../../../__tests__/helpers/storybook'
import { MenuItem, MenuItemProps } from '../MenuItem'
import { defaultStoryMeta } from './MenuItem.stories.gen'
/**
 * Metadata for MenuItem stories - update/extend as needed
 */
export default { ...defaultStoryMeta, title: 'Navigation/Menu/MenuItem' }

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
