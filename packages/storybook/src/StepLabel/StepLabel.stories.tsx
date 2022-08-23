import React from 'react'
import { StepLabel, StepLabelProps } from '@monorail/components'

import { story } from '../helpers/storybook'
/**
 * Metadata for StepLabel stories - update/extend as needed
 */
export default { title: 'Navigation/Stepper/StepLabel', component: StepLabel }

const Template = story<StepLabelProps>(
  (args: StepLabelProps) => {
    return <StepLabel {...args}>Step title</StepLabel>
  },
  {
    muiName: 'MuiStepLabel',
  },
)

export const Default = story(Template)

export const OptionalLabel = story(() => {
  return <StepLabel optional="Optional">Step title</StepLabel>
})
