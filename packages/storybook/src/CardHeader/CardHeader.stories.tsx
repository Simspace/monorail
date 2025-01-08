// Edit this file to add new stories
import React from 'react'
import CloseIcon from '@mui/icons-material/Close'

import type { CardHeaderProps } from '@monorail/components'
import { Avatar, CardHeader, IconButton } from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default { title: 'Surfaces/Card/CardHeader', component: CardHeader }

const Template = story<CardHeaderProps>((args) => <CardHeader {...args} />, {
  args: {
    title: 'Title',
    subheader: 'Subheader',
  },
  muiName: 'MuiCardHeader',
})

export const Default = story(Template)

export const WithAvatar = () => (
  <CardHeader title='Title' subheader='Subheader' avatar={<Avatar />} />
)

export const WithAction = () => (
  <CardHeader
    title='Title'
    subheader='Subheader'
    action={
      <IconButton size='large' aria-label='Close'>
        <CloseIcon />
      </IconButton>
    }
  />
)
