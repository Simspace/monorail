import React from 'react'
import type { StoryFn } from '@storybook/react'

import type { WidgetHeaderProps } from '@monorail/components'
import { Button, IconButton, WidgetHeader } from '@monorail/components'
import { MoreVert } from '@monorail/components/icons'

export default { title: 'Data Display/WidgetHeader', component: WidgetHeader }

const Template: StoryFn<Partial<WidgetHeaderProps>> = args => (
  <WidgetHeader title="Widget Name" {...args}>
    <Button variant="text">Button</Button>
    <IconButton aria-label="more">
      <MoreVert />
    </IconButton>
  </WidgetHeader>
)

export const Default = Template.bind({})

export const WithSubtitle: StoryFn<Partial<WidgetHeaderProps>> = args => (
  <WidgetHeader title="Widget Name" subtitle="Subtitle" {...args}>
    <Button variant="text">Button</Button>
    <IconButton aria-label="more">
      <MoreVert />
    </IconButton>
  </WidgetHeader>
)
