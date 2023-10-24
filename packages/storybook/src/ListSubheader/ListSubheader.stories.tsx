// Edit this file to add new stories
import React from 'react'

import type { ListSubheaderProps } from '@monorail/components'
import { ListSubheader } from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default {
  title: 'Data Display/List/ListSubheader',
  component: ListSubheader,
}

const Template = story<ListSubheaderProps>(
  args => (
    <ul>
      <ListSubheader {...args} />
    </ul>
  ),
  { args: { children: 'List Subheader' }, muiName: 'MuiListSubheader' },
)

export const Default = story(Template)
