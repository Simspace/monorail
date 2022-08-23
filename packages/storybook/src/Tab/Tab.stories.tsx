// Edit this file to add new stories
import React from 'react'
import { Tab, TabProps } from '@monorail/components'

import { story } from '../helpers/storybook'
/**
 * Metadata for Tab stories - update/extend as needed
 */
export default { title: 'Navigation/Tab', component: Tab }
/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<TabProps>(
  args => (
    <div role="tablist">
      <Tab {...args} />
    </div>
  ),
  {
    args: { label: 'Item 1' },
    muiName: 'MuiTab',
  },
)
/** Default story for Tab (edit/remove by hand if needed) */
export const Default = story(Template)
// TODO: add more stories below
