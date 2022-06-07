// Edit this file to add new stories
import React from 'react'
import RestoreIcon from '@mui/icons-material/Restore'
import {
  BottomNavigationAction,
  BottomNavigationActionProps,
} from '@mui/material'

import { story } from '../../../test-helpers/storybook'

/**
 * Metadata for BottomNavigationAction stories - update/extend as needed
 * This is intended to be exported as story-level metadata from the main .stories.tsx file, like:
 * "export default { ...defaultStoryMeta } // Add/extend as needed
 */
export default {
  title: 'Navigation/BottomNavigation/BottomNavigationAction',
  component: BottomNavigationAction,
}

/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<BottomNavigationActionProps>(
  args => <BottomNavigationAction aria-label="Action" {...args} />,
  { args: { label: 'Recents', showLabel: true, icon: <RestoreIcon /> } },
)

/** Default story for BottomNavigationAction (edit/remove by hand if needed) */
export const Default = story(Template)
// TODO: add more stories below
