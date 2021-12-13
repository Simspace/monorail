// Edit this file to add new stories
import React from 'react'
import { ImageListItemBar, ImageListItemBarProps } from '../ImageListItemBar'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './ImageListItemBar.stories.gen'
import { IconButton } from '../../IconButton/IconButton'
import InfoIcon from '@mui/icons-material/Info'

/**
 * Metadata for ImageListItemBar stories - update/extend as needed
 */
export default {
  ...defaultStoryMeta,
  title: 'Layout/ImageList/ImageListItemBar',
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
const Template = story<ImageListItemBarProps>(
  args => <ImageListItemBar {...args} />,
  {
    args: {
      title: 'title',
      subtitle: 'subtitle',
      actionIcon: (
        <IconButton
          aria-label="info"
          sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
          size="large"
        >
          <InfoIcon />
        </IconButton>
      ),
    },
  },
)
/** Default story for ImageListItemBar (edit/remove by hand if needed) */
export const Default = story(Template)
