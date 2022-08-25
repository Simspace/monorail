// Edit this file to add new stories
import React from 'react'

import type { AccordionDetailsProps } from '@monorail/components'
import { AccordionDetails } from '@monorail/components'

import { story } from '../helpers/storybook.js'

/**
 * Metadata for AccordionDetails stories - update/extend as needed
 */
export default {
  title: 'Surfaces/Accordion/AccordionDetails',
  component: AccordionDetails,
}

/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<AccordionDetailsProps>(
  args => <AccordionDetails {...args}>Accordion Details</AccordionDetails>,
  { args: {}, muiName: 'MuiAccordionDetails' },
)

/** Default story for AccordionDetails (edit/remove by hand if needed) */
export const Default = story(Template)

// TODO: add more stories below
