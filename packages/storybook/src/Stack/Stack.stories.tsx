// Edit this file to add new stories
import React from 'react'
import { styled } from '@mui/material'

import type { StackProps } from '@monorail/components'
import { Divider, Paper, Stack } from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default { title: 'Layout/Stack', component: Stack }

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

const Template = story<StackProps>(
  args => (
    <Stack direction={'row'} justifyContent={'center'}>
      <Stack {...args}>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Stack>
    </Stack>
  ),
  {
    args: {},
    parameters: {},
    muiName: 'MuiStack',
  },
)

export const Default = story(Template, {
  args: { spacing: 2 },
})

/**
 * By default, `Stack` arranges items vertically in a column. However, the `direction` prop can be used to position items horizontally in a row as well.
 */
export const Direction = story(Template, {
  args: { spacing: 2, direction: 'row' },
  parameters: {
    docs: {
      storyDescription: 'Direction',
    },
  },
})

/**
 * Use the `divider` prop to insert an element between each child. This works particularly well with the Divider component.
 */
export const Dividers = story(Template, {
  args: {
    spacing: 2,
    direction: 'row',
    divider: <Divider orientation={'vertical'} />,
  },
  parameters: {
    docs: {
      storyDescription: 'Divider',
    },
  },
})
