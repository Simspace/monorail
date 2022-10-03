// Edit this file to add new stories
import React from 'react'

import type { ButtonBaseProps } from '@monorail/components'
import { ButtonBase } from '@monorail/components'

import { story } from '../helpers/storybook.js'

/**
 * Metadata for ButtonBase stories - update/extend as needed
 * This is intended to be exported as story-level metadata from the main .stories.tsx file, like:
 * "export default { ...defaultStoryMeta } // Add/extend as needed
 */
export default { title: 'Inputs/ButtonBase', component: ButtonBase }
/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<ButtonBaseProps>(args => <ButtonBase {...args} />, {
  args: { children: 'Button Base' },
  parameters: {
    docs: {
      description: {
        story: `The Text Buttons, Contained Buttons, Floating Action Buttons and Icon Buttons are built on top of the same component: the ButtonBase. You can take advantage of this lower-level component to build custom interactions.`,
      },
    },
  },
  muiName: 'MuiButtonBase',
})
/** Default story for ButtonBase (edit/remove by hand if needed) */
export const Default = story(Template)
