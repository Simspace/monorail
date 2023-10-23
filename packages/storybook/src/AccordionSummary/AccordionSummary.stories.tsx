// Edit this file to add new stories
import React from 'react'
import ExpandMore from '@mui/icons-material/ExpandMore'

import type { AccordionSummaryProps } from '@monorail/components'
import { AccordionSummary } from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default {
  title: 'Surfaces/Accordion/AccordionSummary',
  component: AccordionSummary,
}

const Template = story<AccordionSummaryProps>(
  args => (
    <AccordionSummary {...args} expandIcon={<ExpandMore />}>
      Accordion Summary
    </AccordionSummary>
  ),
  { args: {}, muiName: 'MuiAccordionSummary' },
)

export const Default = story(Template)
