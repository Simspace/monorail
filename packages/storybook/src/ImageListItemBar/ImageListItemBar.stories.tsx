// Edit this file to add new stories
import React from 'react'
import InfoIcon from '@mui/icons-material/Info'

import type { ImageListItemBarProps } from '@monorail/components'
import { IconButton, ImageListItemBar } from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default {
  title: 'Layout/ImageList/ImageListItemBar',
  component: ImageListItemBar,
  parameters: {
    creevey: {
      skip: "Images don't load reliably",
    },
  },
}

const Template = story<ImageListItemBarProps>(
  (args: ImageListItemBarProps) => <ImageListItemBar {...args} />,
  {
    args: {
      title: 'title',
      subtitle: 'subtitle',
      actionIcon: (
        <IconButton aria-label='info' sx={{ color: 'rgba(255, 255, 255, 0.54)' }} size='large'>
          <InfoIcon />
        </IconButton>
      ),
    },
    muiName: 'MuiImageListItemBar',
  },
)

export const Default = story(Template)
