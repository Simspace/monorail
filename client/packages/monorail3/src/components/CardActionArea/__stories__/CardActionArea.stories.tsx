// Edit this file to add new stories
import React from 'react'
import { CardActionArea, CardActionAreaProps } from '../CardActionArea'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './CardActionArea.stories.gen'

/**
 * Metadata for CardActionArea stories - update/extend as needed
 * This is intended to be exported as story-level metadata from the main .stories.tsx file, like:
 * "export default { ...defaultStoryMeta } // Add/extend as needed
 */
export default { ...defaultStoryMeta, title: 'Surfaces/Card/CardActionArea' }

/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<CardActionAreaProps>(
  args => <CardActionArea {...args} />,
  { args: { children: 'Card Action Area' } },
)

/** Default story for CardActionArea (edit/remove by hand if needed) */
export const Default = story(Template)
