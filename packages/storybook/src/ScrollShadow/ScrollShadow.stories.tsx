import React from 'react'
import type { Story } from '@storybook/react'

import type { ScrollShadowProps } from '@monorail/components'
import { Box, ScrollShadow } from '@monorail/components'

export default { title: 'Utils/ScrollShadow', component: ScrollShadow }

const Template: Story<Partial<ScrollShadowProps>> = args => {
  return (
    <ScrollShadow sx={theme => ({ height: theme.spacing(100) })} {...args}>
      <Box height={800} />
    </ScrollShadow>
  )
}

export const Default = Template.bind({})
