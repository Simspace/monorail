// Edit this file to add new stories
import React from 'react'
import { Step, StepProps } from '../Step'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './Step.stories.gen'
import { Box } from '../../Box/Box'
import { Stepper } from '../../Stepper/Stepper'
import { StepLabel } from '../../StepLabel/StepLabel'
/**
 * Metadata for Step stories - update/extend as needed
 */
export default { ...defaultStoryMeta }
/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<StepProps>(({ children, ...rest }) => (
  <Box sx={{ width: '100%' }}>
    <Stepper>
      <Step {...rest}>{children}</Step>
    </Stepper>
  </Box>
))

export const Default = story(Template, {
  args: {
    children: <StepLabel>I'm a step</StepLabel>,
  },
  parameters: {
    docs: {
      description: {
        component: `
Steppers convey progress through numbered steps. It provides a wizard-like workflow.
`,
      },
    },
  },
})

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
    args: {},
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
    args: {},
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

export const LastStep = story(
  () => (
    <Box sx={{ width: '100%' }}>
      <Stepper nonLinear>
        <Step active>
          <StepLabel>First</StepLabel>
        </Step>
        <Step last={true}>
          <StepLabel>Third (but second)</StepLabel>
        </Step>
        <Step last={false}>
          <StepLabel>Second</StepLabel>
        </Step>
      </Stepper>
    </Box>
  ),
  {
    args: {},
    parameters: {
      docs: {
        description: {
          story: `
If the \`last\` prop is \`true\`, the Step is displayed as rendered last. The prop defaults to the value inherited from the parent Stepper component.
`,
        },
      },
    },
  },
)
