// Edit this file to add new stories
import React from 'react'
import { Accordion, AccordionProps } from '../Accordion'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './Accordion.storyHelpers'
import { AccordionSummary } from '../../AccordionSummary/AccordionSummary'
import { AccordionDetails } from '../../AccordionDetails/AccordionDetails'
import * as MUI from '@material-ui/core'

/** Metadata for these stories - update/extend as needed */
export default { ...defaultStoryMeta }

/** Story template - update as needed */
const Template = story<AccordionProps>(args => (
  <Accordion {...args}>
    <AccordionSummary id="accordion-summary" aria-controls="accordion-details">
      Summary
    </AccordionSummary>
    <AccordionDetails id="accordion-details">Details</AccordionDetails>
  </Accordion>
))

/** Default story (edit as needed) */
export const Default = story(Template, {})

// TODO: add more stories below

/*
export const Default = () => (
  <Accordion>
    <AccordionSummary id="summary-1" aria-controls="details-1">
      Summary
    </AccordionSummary>
    <AccordionDetails id="details=1">Details</AccordionDetails>
  </Accordion>
)
 */

export const Default2 = () => (
  <MUI.Accordion>
    <MUI.AccordionSummary id="summary-1" aria-controls="details-1">
      Summary
    </MUI.AccordionSummary>
    <MUI.AccordionDetails id="details=1">Details</MUI.AccordionDetails>
  </MUI.Accordion>
)
