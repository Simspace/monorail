// Edit this file to add new stories
import React from 'react'
import { StepButton, StepButtonProps } from '../StepButton'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './StepButton.stories.gen'
import { WarningAmberTwoTone } from '@material-ui/icons'
import { StepLabel } from '../../StepLabel/StepLabel'
import { Box } from '../../Box/Box'
import { Step } from '../../Step/Step'
import { Typography } from '../../Typography/Typography'
import { Button } from '../../Button/Button'
import { Stepper } from '../../Stepper/Stepper'
/**
 * Metadata for StepButton stories - update/extend as needed
 */
export default { ...defaultStoryMeta }

const steps2 = [
  'Select campaign settings',
  'Create an ad group',
  'Create an ad',
]

export const OptionalStepButton = story(
  () => (
    <Box sx={{ width: '100%' }}>
      <StepButton
        optional={<Typography variant="caption">Optional</Typography>}
      >
        <StepLabel>Create an ad group</StepLabel>
      </StepButton>
    </Box>
  ),
  {
    args: {},
    parameters: {
      docs: {
        description: {
          component: `
A clickable step label
`,
        },
      },
    },
  },
)

export const IconStepButton = story(() => (
  <Box sx={{ width: '100%' }}>
    <StepButton has icon={<WarningAmberTwoTone />}>
      <StepLabel>Warning</StepLabel>
    </StepButton>
  </Box>
))
