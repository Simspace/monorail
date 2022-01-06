// Edit this file to add new stories
import React from 'react'

import { story } from '../../../__tests__/helpers/storybook'
import { ListSubheader, ListSubheaderProps } from '../ListSubheader'
import { defaultStoryMeta } from './ListSubheader.stories.gen'
/**
 * Metadata for ListSubheader stories - update/extend as needed
 */
export default {
  ...defaultStoryMeta,
  title: 'Data Display/List/ListSubheader',
}
/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<ListSubheaderProps>(
  args => (
    <ul>
      <ListSubheader {...args} />
    </ul>
  ),
  { args: { children: 'List Subheader' } },
)
/** Default story for ListSubheader (edit/remove by hand if needed) */
export const Default = story(Template)
// TODO: add more stories below
