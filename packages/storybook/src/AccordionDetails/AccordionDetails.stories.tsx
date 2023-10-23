// Edit this file to add new stories
import React from 'react'

import type { AccordionDetailsProps } from '@monorail/components'
import { AccordionDetails } from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default {
  title: 'Surfaces/Accordion/AccordionDetails',
  component: AccordionDetails,
}

const Template = story<AccordionDetailsProps>(
  args => <AccordionDetails {...args}>Accordion Details</AccordionDetails>,
  { args: {}, muiName: 'MuiAccordionDetails' },
)

export const Default = story(Template)
