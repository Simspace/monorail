// Edit this file to add new stories
import React from 'react'

import type { CardMediaProps } from '@monorail/components'
import { CardMedia } from '@monorail/components'

import { story } from '../helpers/storybook.js'
import { images } from '../helpers/testData.js'

export default {
  title: 'Surfaces/Card/CardMedia',
  component: CardMedia,
  parameters: {
    creevey: {
      skip: 'Images are unreliable',
    },
  },
}

const Template = story<CardMediaProps<'img'>>(
  args => <CardMedia component="img" {...args} />,
  {
    args: {
      image: images.paella.url,
      alt: 'An image of a paella',
      sx: {
        height: 160,
      },
    },
    muiName: 'MuiCardMedia',
  },
)

export const Default = story(Template, {
  parameters: {
    a11y: {
      config: { rules: { 'aria-roles': { enabled: false } } }, // MUI has invalid aria role on CardMedia (image instead of img)
    },
  },
})
