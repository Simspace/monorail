import React from 'react'

import { StepLabel, StepLabelProps } from '../StepLabel'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './StepLabel.stories.gen'
import { Box } from '../../Box/Box'
import { Stepper } from '../../Stepper/Stepper'
import { Step } from '../../Step/Step'
import { Typography } from '../../Typography/Typography'
/**
 * Metadata for StepLabel stories - update/extend as needed
 */
export default { ...defaultStoryMeta, title: 'Navigation/Stepper/StepLabel' }

const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad']

const Template = story<StepLabelProps>(args => {
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={1}>
        {/* These steps could be provided by args, but there's not much of a use case right now. */}
        {steps.map(label => (
          <Step key={label}>
            <StepLabel {...args}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  )
})

export const Default = story(Template)

export const LabelBelowStepper = story(
  () => {
    {
      const steps = [
        'Select master blaster campaign settings',
        'Create an ad group',
        'Create an ad',
      ]

      return (
        <Box sx={{ width: '100%' }}>
          <Stepper activeStep={1} alternativeLabel>
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
      )
    }
  },
  {
    storyName: 'Alternative label',
    parameters: {
      docs: {
        description: {
          story: `
Labels can be placed _below_ the step icon by setting the \`alternativeLabel\` prop on the \`Stepper\` component.
        `,
        },
      },
    },
  },
)

function HorizontalStepperWithError() {
  const isStepFailed = (step: number) => {
    return step === 1
  }

  const steps = [
    'Select campaign settings',
    'Create an ad group',
    'Create an ad',
  ]

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={1}>
        {steps.map((label, index) => {
          const labelProps: {
            optional?: React.ReactNode
            error?: boolean
          } = {}
          if (isStepFailed(index)) {
            labelProps.optional = (
              <Typography variant="caption" color="error">
                Alert message
              </Typography>
            )
            labelProps.error = true
          }

          return (
            <Step key={label}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          )
        })}
      </Stepper>
    </Box>
  )
}

export const StepLabelWithError = story(HorizontalStepperWithError, {
  storyName: 'Step label showing an error',
  parameters: {
    docs: {
      description: {
        story: `
Labels can be used in conjuction with steps to show an error state.
        `,
      },
    },
  },
})
