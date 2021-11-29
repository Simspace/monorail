// Edit this file to add new stories
import React from 'react'

import { story } from '../../../__tests__/helpers/storybook'
import { ImageListItem, ImageListItemProps } from '../ImageListItem'
import { defaultStoryMeta } from './ImageListItem.stories.gen'
/**
 * Metadata for ImageListItem stories - update/extend as needed
 */
export default {
  ...defaultStoryMeta,
  title: 'Layout/ImageList/ImageListItem',
  parameters: {
    creevey: {
      skip: "Images don't load reliably",
    },
  },
}
/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<ImageListItemProps>(
  args => (
    <ImageListItem {...args}>
      <img
        src={`https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=164&h=164&fit=crop&auto=format`}
        srcSet={`https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        loading="lazy"
      />
    </ImageListItem>
  ),
  {
    args: {},
  },
)
/** Default story for ImageListItem (edit/remove by hand if needed) */
export const Default = story(Template)
