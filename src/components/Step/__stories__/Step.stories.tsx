import React from 'react'
import { Box, Step, StepLabel, Stepper, StepProps } from '@mui/material'

import { story } from '../../../__tests__/helpers/storybook'
/**
 * Metadata for Step stories - update/extend as needed
 */
export default { title: 'Navigation/Stepper/Step', component: Step }

export const Default = story<StepProps>(
  args => (
    <Box sx={{ width: '100%' }}>
      <Stepper>
        <Step {...args}>
          <StepLabel>I'm a step</StepLabel>
        </Step>
      </Stepper>
    </Box>
  ),
  {
    parameters: {
      docs: {
        description: {
          component: `
Steppers convey progress through numbered steps. It provides a wizard-like workflow.
`,
        },
      },
    },
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
          story: `
Mark a step as completed.
`,
        },
      },
    },
  },
)

export const ExpandedStep = story(
  () => (
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
  ),
  {
    parameters: {
      docs: {
        description: {
          story: `
The \`expanded\` prop is available to \`Step\` components, but I'm not sure what it does.
`,
        },
      },
    },
  },
)
