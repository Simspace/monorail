// Edit this file to add new stories
import React from 'react'
import { TableSortLabel, TableSortLabelProps } from '../TableSortLabel'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './TableSortLabel.stories.gen'

/**
 * Metadata for TableSortLabel stories - update/extend as needed
 */
export default { ...defaultStoryMeta }

/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<TableSortLabelProps>(
  args => {
    const [direction, setDirection] = React.useState<'asc' | 'desc'>('asc')

    return (
      <TableSortLabel
        direction={direction}
        onClick={() => setDirection(direction === 'asc' ? 'desc' : 'asc')}
        {...args}
      />
    )
  },

  { args: { children: 'Title' } },
)

/** Default story for TableSortLabel (edit/remove by hand if needed) */
export const Default = story(Template, {
  parameters: {
    docs: {
      description: {
        component: `TableSortLabel is a button used for toggling the sort direction on a column`,
      },
    },
  },
})
