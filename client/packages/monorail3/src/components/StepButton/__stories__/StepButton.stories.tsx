// Edit this file to add new stories
import React from 'react'
import { WarningAmberTwoTone } from '@mui/icons-material'

import { story } from '../../../__tests__/helpers/storybook'
import { Box } from '../../Box/Box'
import { Step } from '../../Step/Step'
import { StepLabel } from '../../StepLabel/StepLabel'
import { Stepper } from '../../Stepper/Stepper'
import { Typography } from '../../Typography/Typography'
import { StepButton, StepButtonProps } from '../StepButton'
import { defaultStoryMeta } from './StepButton.stories.gen'
/**
 * Metadata for StepButton stories - update/extend as needed
 */
export default { ...defaultStoryMeta, title: 'Navigation/Stepper/StepButton' }

export const Default = story<StepButtonProps>(
  args => (
    <Box sx={{ width: '100%' }}>
      <Stepper>
        <Step>
          <StepButton {...args}>Click me</StepButton>
        </Step>
        <Step>
          <StepButton>Not me</StepButton>
        </Step>
        <Step>
          <StepButton>Not me</StepButton>
        </Step>
      </Stepper>
    </Box>
  ),
  {
    parameters: {
      docs: {
        description: {
          component: `
A clickable, labeled step.
`,
        },
      },
    },
  },
)

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
    parameters: {
      docs: {
        description: {
          story: `
The \`optional\` prop can be used to provide text below the main button label.
`,
        },
      },
    },
  },
)

export const IconStepButton = story(
  () => (
    <Box sx={{ width: '100%' }}>
      <StepButton icon={<WarningAmberTwoTone />}>
        <StepLabel>Warning</StepLabel>
      </StepButton>
    </Box>
  ),
  {
    parameters: {
      docs: {
        description: {
          story: `
Similarly, the \`icon\` prop can be used to provide an icon next to the main button label.
`,
        },
      },
    },
  },
)
