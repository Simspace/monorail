// Edit this file to add new stories
import React from 'react'

import type { AccordionActionsProps } from '@monorail/components'
import { AccordionActions, Button } from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default {
  title: 'Surfaces/Accordion/AccordionActions',
  component: AccordionActions,
}

const Template = story<AccordionActionsProps>(
  args => (
    <AccordionActions {...args}>
      <Button variant="text">Action 1</Button>
      <Button variant="contained">Action 2</Button>
    </AccordionActions>
  ),
  { args: {}, muiName: 'MuiAccordionActions' },
)

export const Default = story(Template)
