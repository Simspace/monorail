import React from 'react'
import type { StoryObj } from '@storybook/react'

import { InlineTextField, MenuItem } from '@monorail/components'

export default { title: 'Inputs/InlineTextField', component: InlineTextField }

export const Default: StoryObj<typeof InlineTextField> = {
  render: args => {
    return <InlineTextField label="Label" placeholder="Placeholder" {...args} />
  },
}

export const Select: StoryObj<typeof InlineTextField> = {
  render: args => {
    return (
      <InlineTextField select defaultValue="one" label="Label" {...args}>
        <MenuItem value="one">One</MenuItem>
        <MenuItem value="two">Two</MenuItem>
        <MenuItem value="three">Three</MenuItem>
      </InlineTextField>
    )
  },
}
