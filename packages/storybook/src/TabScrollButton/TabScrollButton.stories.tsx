// Edit this file to add new stories
import React from 'react'

import type { TabScrollButtonProps } from '@monorail/components'
import { TabScrollButton } from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default {
  title: 'Navigation/Tab/TabScrollButton',
  component: TabScrollButton,
}

const Template = story<TabScrollButtonProps>(
  args => (
    <TabScrollButton direction={'left'} orientation={'vertical'} {...args} />
  ),
  { args: {} },
)

export const Default = story(Template)
