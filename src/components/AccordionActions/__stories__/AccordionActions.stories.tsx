// Edit this file to add new stories
import React from 'react'

import { AccordionActions, AccordionActionsProps, Button } from '../../..'
import { story } from '../../../test-helpers/storybook'

/**
 * Metadata for AccordionActions stories - update/extend as needed
 */
export default {
  title: 'Surfaces/Accordion/AccordionActions',
  component: AccordionActions,
}

/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<AccordionActionsProps>(
  args => (
    <AccordionActions {...args}>
      <Button variant="text">Action 1</Button>
      <Button variant="contained">Action 2</Button>
    </AccordionActions>
  ),
  { args: {}, muiName: 'MuiAccordionActions' },
)

/** Default story for AccordionActions (edit/remove by hand if needed) */
export const Default = story(Template)
