// Edit this file to add new stories
import React from 'react'
import { MenuItem, MenuItemProps } from '../MenuItem'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './MenuItem.stories.gen'
/**
 * Metadata for MenuItem stories - update/extend as needed
 */
export default { ...defaultStoryMeta }

const Template = story<MenuItemProps>(args => <MenuItem {...args} />, {
  args: {
    children: 'Item 1',
  },
})

/** Used primarily with the `Menu` component  */
export const Default = story(Template)
