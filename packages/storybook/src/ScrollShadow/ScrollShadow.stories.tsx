import React from 'react'
import { Box, ScrollShadow, ScrollShadowProps } from '@monorail/components'
import { Story } from '@storybook/react'

export default { title: 'Utils/ScrollShadow', component: ScrollShadow }

const Template: Story<Partial<ScrollShadowProps>> = args => {
  return (
    <ScrollShadow sx={theme => ({ height: theme.spacing(100) })} {...args}>
      <Box height={800} />
    </ScrollShadow>
  )
}

export const Default = Template.bind({})
