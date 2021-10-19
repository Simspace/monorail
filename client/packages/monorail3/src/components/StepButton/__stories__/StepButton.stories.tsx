// Edit this file to add new stories
import React from 'react'
import { StepButton, StepButtonProps } from '../StepButton'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './StepButton.stories.gen'
import { WarningAmberTwoTone } from '@mui/icons-material'
import { StepLabel } from '../../StepLabel/StepLabel'
import { Box } from '../../Box/Box'
import { Step } from '../../Step/Step'
import { Typography } from '../../Typography/Typography'
import { Button } from '../../Button/Button'
import { Stepper } from '../../Stepper/Stepper'
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
