import React from 'react'

import { StepLabel, StepLabelProps } from '../../..'
import { story } from '../../../test-helpers/storybook'
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
