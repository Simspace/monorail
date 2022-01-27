import React from 'react'

import { story } from '../../../__tests__/helpers/storybook'
import { Box } from '../../Box/Box'
import { Button } from '../../Button/Button'
import { Fade } from '../../Fade/Fade'
import { Paper } from '../../Paper/Paper'
import { Step } from '../../Step/Step'
import { StepLabel } from '../../StepLabel/StepLabel'
import { Stepper } from '../../Stepper/Stepper'
import { Typography } from '../../Typography/Typography'
import { Zoom } from '../../Zoom/Zoom'
import { StepContent, StepContentProps } from '../StepContent'
import { defaultStoryMeta } from './StepContent.stories.gen'
/**
 * Metadata for StepContent stories - update/extend as needed
 */
export default { ...defaultStoryMeta, title: 'Navigation/Stepper/StepContent' }

const steps = [
  {
    label: 'Select campaign settings',
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: 'Create an ad group',
    description:
      'An ad group contains one or more ads which target a shared set of keywords.',
  },
  {
    label: 'Create an ad',
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
]

const Template = (args: StepContentProps) => {
  const [activeStep, setActiveStep] = React.useState(0)

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  const handleReset = () => {
    setActiveStep(0)
  }

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent {...args}>
              <div>
                <Typography>{step.description}</Typography>
                <Box sx={{ mb: 2 }}>
                  <div>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      {index === steps.length - 1 ? 'Finish' : 'Continue'}
                    </Button>
                    <Button
                      disabled={index === 0}
                      onClick={handleBack}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Back
                    </Button>
                  </div>
                </Box>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  )
}

export const Default = story(Template, {
  parameters: {
    docs: {
      description: {
        component: `
When using a \`Stepper\` component with vertical orientation, \`StepContent\` can be used to show
additional information for each step. It has nice transition properties built in.
`,
      },
    },
  },
})

export const FadeTransition = story(Template, {
  args: {
    TransitionComponent: Fade,
    TransitionProps: {
      appear: false,
    },
  },
  parameters: {
    docs: {
      description: {
        story: `
Using \`Fade\` for the \`TransitionComponent\` prop.

@see https://next.material-ui.com/components/transitions/#transitioncomponent-prop for more.
`,
      },
    },
  },
})

export const ZoomTransition = story(Template, {
  args: {
    TransitionComponent: Zoom,
    TransitionProps: {
      appear: false,
    },
    transitionDuration: { appear: 1000, enter: 1000, exit: 1000 },
  },
  parameters: {
    docs: {
      description: {
        story: `
You can provide different components to the \`TransitionComponent\` prop.

Here we've also made the \`transitionDuration\` very high (1 second).

@see https://next.material-ui.com/components/transitions/#transitioncomponent-prop for more.
`,
      },
    },
  },
})
