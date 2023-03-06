// Edit this file to add new stories
import React from 'react'

import type { CardActionAreaProps } from '@monorail/components'
import { CardActionArea } from '@monorail/components'

import { story } from '../helpers/storybook.js'

/**
 * Metadata for CardActionArea stories - update/extend as needed
 * This is intended to be exported as story-level metadata from the main .stories.tsx file, like:
 * "export default { ...defaultStoryMeta } // Add/extend as needed
 */
export default {
  title: 'Surfaces/Card/CardActionArea',
  component: CardActionArea,
  argTypes: {
    disabled: { control: 'boolean' },
  },
}

/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<CardActionAreaProps>(
  args => <CardActionArea {...args} />,
  { args: { children: 'Card Action Area' }, muiName: 'MuiCardActionArea' },
)

/** Default story for CardActionArea (edit/remove by hand if needed) */
export const Default = story(Template)
