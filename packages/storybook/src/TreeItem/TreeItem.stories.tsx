// Edit this file to add new stories
import React from 'react'

import type { TreeItemProps } from '@monorail/components'
import { SimpleTreeView, Stack, TreeItem, Typography } from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default {
  title: 'Data Display/SimpleTreeView/TreeItem',
  component: TreeItem,
}

const Template = story<TreeItemProps>(
  (args) => (
    <SimpleTreeView>
      <TreeItem itemId='a' {...args} />
    </SimpleTreeView>
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
  args: { label: "I'm a tree item!", itemId: 'a' },
})

export const WithSecondaryLabel = story((args) => (
  <SimpleTreeView>
    <TreeItem
      itemId='a'
      label={
        <Stack direction='row' alignItems='baseline'>
          <Typography variant='inherit' flexGrow={1}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </Typography>
          <Typography variant='caption' color='text.secondary' ml={2}>
            99
          </Typography>
        </Stack>
      }
      sx={{ maxWidth: 240 }}
      {...args}
    />
  </SimpleTreeView>
))

export const TruncatedLabel = story((args) => (
  <SimpleTreeView>
    <TreeItem
      itemId='a'
      label={
        <Stack direction='row' alignItems='baseline' minWidth={0}>
          <Typography variant='inherit' flexGrow={1} lineClamp={1}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </Typography>
          <Typography variant='caption' color='text.secondary' ml={2}>
            99
          </Typography>
        </Stack>
      }
      sx={{ maxWidth: 240 }}
      {...args}
    />
  </SimpleTreeView>
))
