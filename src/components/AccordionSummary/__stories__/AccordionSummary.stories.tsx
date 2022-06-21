// Edit this file to add new stories
import React from 'react'
import ExpandMore from '@mui/icons-material/ExpandMore'

import { AccordionSummary, AccordionSummaryProps } from '../../..'
import { story } from '../../../test-helpers/storybook'

/**
 * Metadata for AccordionSummary stories - update/extend as needed
 *
 * This is intended to be exported as story-level metadata from the main .stories.tsx file, like:
 * "export default { ...defaultStoryMeta } // Add/extend as needed
 */
export default {
  title: 'Surfaces/Accordion/AccordionSummary',
  component: AccordionSummary,
}

/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<AccordionSummaryProps>(
  args => (
    <AccordionSummary {...args} expandIcon={<ExpandMore />}>
      Accordion Summary
    </AccordionSummary>
  ),
  { args: {}, muiName: 'MuiAccordionSummary' },
)

/**
 * Default story for AccordionSummary (edit/remove by hand if needed)
 */
export const Default = story(Template)

// TODO: add more stories below
