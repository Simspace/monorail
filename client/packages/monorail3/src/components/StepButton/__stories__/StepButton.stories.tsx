// Edit this file to add new stories
import React from 'react'
import { StepButton, StepButtonProps } from '../StepButton'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './StepButton.stories.gen'
import { Box, Stepper, Step, Typography, Button } from '@material-ui/core'
import { WarningAmberTwoTone } from '@material-ui/icons'
/**
 * Metadata for StepButton stories - update/extend as needed
 */
export default { ...defaultStoryMeta }
/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<StepButtonProps>(args => <StepButton {...args} />, {
  args: {},
})

export const OptionalStepButton = story(() => (
  <StepButton optional={<div>Some optional node</div>} />
))

export const IconStepButton = story(() => (
  <StepButton icon={<WarningAmberTwoTone />} />
))

const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad']

export const HorizontalNonLinearStepper = story(
  function () {
    const [activeStep, setActiveStep] = React.useState(0)
    const [completed, setCompleted] = React.useState<{
      [k: number]: boolean
    }>({})

    const totalSteps = () => {
      return steps.length
    }

    const completedSteps = () => {
      return Object.keys(completed).length
    }

    const isLastStep = () => {
      return activeStep === totalSteps() - 1
    }

    const allStepsCompleted = () => {
      return completedSteps() === totalSteps()
    }

    const handleNext = () => {
      const newActiveStep =
        isLastStep() && !allStepsCompleted()
          ? // It's the last step, but not all steps have been completed,
            // find the first step that has been completed
            steps.findIndex((step, i) => !(i in completed))
          : activeStep + 1
      setActiveStep(newActiveStep)
    }

    const handleBack = () => {
      setActiveStep(prevActiveStep => prevActiveStep - 1)
    }

    const handleStep = (step: number) => () => {
      setActiveStep(step)
    }

    const handleComplete = () => {
      const newCompleted = completed
      newCompleted[activeStep] = true
      setCompleted(newCompleted)
      handleNext()
    }

    const handleReset = () => {
      setActiveStep(0)
      setCompleted({})
    }

    return (
      <Box sx={{ width: '100%' }}>
        <Stepper nonLinear activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={label} completed={completed[index]}>
              <StepButton color="inherit" onClick={handleStep(index)}>
                {label}
              </StepButton>
            </Step>
          ))}
        </Stepper>
        <div>
          {allStepsCompleted() ? (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you&apos;re finished
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button onClick={handleReset}>Reset</Button>
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                Step {activeStep + 1}
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button onClick={handleNext} sx={{ mr: 1 }}>
                  Next
                </Button>
                {activeStep !== steps.length &&
                  (completed[activeStep] ? (
                    <Typography
                      variant="caption"
                      sx={{ display: 'inline-block' }}
                    >
                      Step {activeStep + 1} already completed
                    </Typography>
                  ) : (
                    <Button onClick={handleComplete}>
                      {completedSteps() === totalSteps() - 1
                        ? 'Finish'
                        : 'Complete Step'}
                    </Button>
                  ))}
              </Box>
            </React.Fragment>
          )}
        </div>
      </Box>
    )
  },
  {
    storyName: 'Horizontal Nonlinear Stepper',
    parameters: {
      docs: {
        description: {
          story: `
Non-linear steppers allow users to enter a multi-step flow at any point.
This example is similar to the regular horizontal stepper, except steps are 
no longer automatically set to \`disabled={true}\` based on the \`activeStep\` property.
The use of the \`StepButton\` here demonstrates clickable step labels, as well as setting
the \`completed\` flag. However because steps can be accessed in a non-linear fashion, 
it's up to your own implementation to determine when all steps are completed (or even 
if they need to be completed).
`,
        },
      },
    },
  },
)
