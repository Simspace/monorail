// Edit this file to add new stories
import React from 'react'
import { CardMedia, CardMediaProps } from '@monorail/components'

import { story } from '../helpers/storybook.js'
import { images } from '../helpers/testData.js'
/**
 * Metadata for CardMedia stories - update/extend as needed
 * This is intended to be exported as story-level metadata from the main .stories.tsx file, like:
 * "export default { ...defaultStoryMeta } // Add/extend as needed
 */
export default {
  title: 'Surfaces/Card/CardMedia',
  component: CardMedia,
  parameters: {
    creevey: {
      skip: 'Images are unreliable',
    },
  },
}
/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
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
/** Default story for CardMedia (edit/remove by hand if needed) */
export const Default = story(Template, {
  parameters: {
    a11y: {
      config: { rules: { 'aria-roles': { enabled: false } } }, // MUI has invalid aria role on CardMedia (image instead of img)
    },
  },
})
