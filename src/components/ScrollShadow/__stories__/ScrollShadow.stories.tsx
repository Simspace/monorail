import React from 'react'
import { Story } from '@storybook/react'

import { Box } from '../../Box'
import { ScrollShadow } from '../ScrollShadow'
import { ScrollShadowProps } from '../scrollShadowProps'

export default { title: 'Utils/ScrollShadow', component: ScrollShadow }

const Template: Story<Partial<ScrollShadowProps>> = args => {
  return (
    <ScrollShadow sx={theme => ({ height: theme.spacing(100) })} {...args}>
      <Box height={800} />
    </ScrollShadow>
  )
}

export const Default = Template.bind({})