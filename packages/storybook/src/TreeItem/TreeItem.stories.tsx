// Edit this file to add new stories
import React from 'react'

import type { TreeItemProps } from '@monorail/components'
import { TreeItem } from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default { title: 'Data Display/TreeView/TreeItem', component: TreeItem }

const Template = story<TreeItemProps>(
  args => (
    <div role="tree">
      <TreeItem nodeId={'a'} {...args} />
    </div>
  ),
  {
    args: {},
    muiName: 'MuiTreeItem',
  },
)

/**
 * `TreeItem`s are used as children for `TreeView`
 */
export const Default = story(Template, {
  args: { label: "I'm a tree item!", nodeId: 'a' },
})
