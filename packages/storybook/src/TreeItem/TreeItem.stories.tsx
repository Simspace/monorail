// Edit this file to add new stories
import React from 'react'

import type { TreeItemProps } from '@monorail/components'
import { Stack, TreeItem, Typography } from '@monorail/components'

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

export const WithSecondaryLabel = story(args => (
  <div role="tree">
    <TreeItem
      nodeId={'a'}
      label={
        <Stack direction="row" alignItems="baseline">
          <Typography variant="inherit" flexGrow={1}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </Typography>
          <Typography variant="caption" color="text.secondary" ml={2}>
            99
          </Typography>
        </Stack>
      }
      sx={{ maxWidth: 240 }}
      {...args}
    />
  </div>
))

export const TruncatedLabel = story(args => (
  <div role="tree">
    <TreeItem
      nodeId={'a'}
      label={
        <Stack direction="row" alignItems="baseline" minWidth={0}>
          <Typography variant="inherit" flexGrow={1} lineClamp={1}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </Typography>
          <Typography variant="caption" color="text.secondary" ml={2}>
            99
          </Typography>
        </Stack>
      }
      sx={{ maxWidth: 240 }}
      {...args}
    />
  </div>
))
