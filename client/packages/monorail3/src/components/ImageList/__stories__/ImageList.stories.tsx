// Edit this file to add new stories
import React from 'react'
import { ImageList, ImageListProps } from '../ImageList'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './ImageList.stories.gen'
/**
 * Metadata for ImageList stories - update/extend as needed
 */
export default { ...defaultStoryMeta }
/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<ImageListProps>(
  args => (
    <ImageList {...args}>
      <img
        src="https://images.dog.ceo/breeds/spaniel-blenheim/n02086646_3059.jpg"
        alt="Doge"
      />
      <img
        src="https://images.dog.ceo/breeds/terrier-scottish/n02097298_78.jpg"
        alt="Doge 2"
      />
    </ImageList>
  ),
  {
    args: {},
  },
)
/** Default story for ImageList (edit/remove by hand if needed) */
export const Default = story(Template)
// TODO: add more stories below
