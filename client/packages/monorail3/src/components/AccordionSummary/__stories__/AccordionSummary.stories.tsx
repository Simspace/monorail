// Edit this file to add new stories
import React from 'react'
import { AccordionSummary, AccordionSummaryProps } from '../AccordionSummary'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './AccordionSummary.storyHelpers'
/** Metadata for these stories - update/extend as needed */
export default { ...defaultStoryMeta }
/** Story template - update as needed */
const Template = story<AccordionSummaryProps>(
  args => <AccordionSummary {...args} />,
  { args: {} },
)
/** Default story (edit as needed) */
export const Default = story(Template, {})
// TODO: add more stories below
