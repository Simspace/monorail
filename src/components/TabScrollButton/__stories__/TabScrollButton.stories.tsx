// Edit this file to add new stories
import React from 'react'
import TabScrollButton, {
  TabScrollButtonProps,
} from '@mui/material/TabScrollButton'

import { story } from '../../../test-helpers/storybook'
/**
 * Metadata for TabScrollButton stories - update/extend as needed
 */
export default {
  title: 'Navigation/Tab/TabScrollButton',
  component: TabScrollButton,
}
/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<TabScrollButtonProps>(
  args => (
    <TabScrollButton direction={'left'} orientation={'vertical'} {...args} />
  ),
  { args: {} },
)
/** Default story for TabScrollButton (edit/remove by hand if needed) */
export const Default = story(Template)
// TODO: add more stories below
