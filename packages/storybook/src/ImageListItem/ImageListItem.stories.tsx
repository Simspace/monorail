// Edit this file to add new stories
import React from 'react'

import type { ImageListItemProps } from '@monorail/components'
import { ImageListItem } from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default {
  title: 'Layout/ImageList/ImageListItem',
  component: ImageListItem,
  parameters: {
    creevey: {
      skip: "Images don't load reliably",
    },
  },
}

const Template = story<ImageListItemProps>(
  (args: ImageListItemProps) => (
    <ul>
      <ImageListItem {...args}>
        <img
          alt='demo image'
          src={`https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=164&h=164&fit=crop&auto=format`}
          srcSet={`https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
          loading='lazy'
        />
      </ImageListItem>
    </ul>
  ),
  {
    args: {},
    muiName: 'MuiImageListItem',
  },
)

export const Default = story(Template)
