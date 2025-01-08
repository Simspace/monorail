// Edit this file to add new stories
import React from 'react'
import { loremIpsum } from 'lorem-ipsum'

import type { ListItemTextProps } from '@monorail/components'
import { ListItemText } from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default {
  title: 'Data Display/List/ListItemText',
  component: ListItemText,
}

const Template = story<ListItemTextProps>((args) => <ListItemText {...args} />, {
  args: { primary: 'Primary', secondary: 'Secondary' },
  muiName: 'MuiListItemText',
})

export const Default = story(Template)

export const LineClamp = () => (
  <ListItemText primaryTypographyProps={{ lineClamp: 1 }}>
    {loremIpsum({ count: 100 })}
  </ListItemText>
)
