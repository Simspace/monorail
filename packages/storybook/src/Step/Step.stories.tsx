import React from 'react'

import type { StepProps } from '@monorail/components'
import { Box, Step, StepLabel, Stepper } from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default { title: 'Navigation/Stepper/Step', component: Step }

/**
 * `Stepper`s convey progress through numbered steps. It provides a wizard-like workflow.
 */
export const Default = story<StepProps>(
  args => (
    <Box sx={{ width: '100%' }}>
      <Stepper>
        <Step {...args}>
          <StepLabel optional="Optional">Step title</StepLabel>
        </Step>
      </Stepper>
    </Box>
  ),
  {
    muiName: 'MuiStep',
  },
)

export const CompletedStep = story(
  () => (
    <Box sx={{ width: '100%' }}>
      <Stepper>
        <Step completed>
          <StepLabel>Completed</StepLabel>
        </Step>
      </Stepper>
    </Box>
  ),
  {
    parameters: {
      docs: {
        description: {
          story: 'Mark a step as completed.',
        },
      },
    },
  },
)

/**
 * The `expanded` prop is available to `Step` components.
 */
export const ExpandedStep = story(() => (
  <Box sx={{ width: '100%' }}>
    <Stepper>
      <Step expanded>
        <StepLabel>Expanded</StepLabel>
      </Step>
      <Step>
        <StepLabel>Not Expanded</StepLabel>
      </Step>
      <Step>
        <StepLabel>Not Expanded</StepLabel>
      </Step>
    </Stepper>
  </Box>
))
