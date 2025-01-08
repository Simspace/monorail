import React from 'react'
import type { StoryFn } from '@storybook/react'

import type { WidgetProps } from '@monorail/components'
import {
  Button,
  IconButton,
  Typography,
  Widget,
  WidgetContent,
  WidgetHeader,
} from '@monorail/components'
import { MoreVert } from '@monorail/components/icons'

export default { title: 'Data Display/Widget', component: Widget }

const Template: StoryFn<Partial<WidgetProps>> = (args) => (
  <Widget>
    <WidgetHeader title='Widget Name' subtitle='Subtitle' {...args}>
      <Button variant='text'>Button</Button>
      <IconButton aria-label='more'>
        <MoreVert />
      </IconButton>
    </WidgetHeader>
    <WidgetContent>
      <Typography>Some widget content</Typography>
    </WidgetContent>
  </Widget>
)

export const Default = Template.bind({})
