// Edit this file to add new stories
import React from 'react'

import type { TabProps } from '@monorail/components'
import { Tab } from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default { title: 'Navigation/Tab', component: Tab }

const Template = story<TabProps>(
  args => (
    <div role="tablist">
      <Tab {...args} />
    </div>
  ),
  {
    args: { label: 'Item 1' },
    muiName: 'MuiTab',
  },
)

export const Default = story(Template)
