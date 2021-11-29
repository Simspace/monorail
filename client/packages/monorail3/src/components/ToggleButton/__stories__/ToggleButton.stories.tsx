// Edit this file to add new stories
import React from 'react'
import { ToggleButton, ToggleButtonProps } from '../ToggleButton'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './ToggleButton.stories.gen'
/**
 * Metadata for ToggleButton stories - update/extend as needed
 */
export default { ...defaultStoryMeta, title: 'Inputs/ToggleButton' }
/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<ToggleButtonProps>(
  args => <ToggleButton value={'value'} {...args} />,
  {
    args: { children: 'Toggle Button' },
  },
)
/** Default story for ToggleButton (edit/remove by hand if needed) */
export const Default = story(Template, {
  parameters: {
    docs: {
      description: {
        story: `See ToggleButtonGroup for related stories.`,
      },
    },
  },
})
