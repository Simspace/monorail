// Edit this file to add new stories
import React from 'react'
import { TreeItem, TreeItemProps } from '../TreeItem'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './TreeItem.stories.gen'
/**
 * Metadata for TreeItem stories - update/extend as needed
 */
export default { ...defaultStoryMeta }
/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<TreeItemProps>(
  args => <TreeItem nodeId={'a'} {...args} />,
  {
    args: {},
  },
)
/** Default story for TreeItem (edit/remove by hand if needed) */
export const Default = story(Template, {
  args: { label: "I'm a tree item!", nodeId: 'a' },
  parameters: {
    docs: {
      description: {
        component: `TreeItems are used as children for TreeView`,
      },
    },
  },
})
