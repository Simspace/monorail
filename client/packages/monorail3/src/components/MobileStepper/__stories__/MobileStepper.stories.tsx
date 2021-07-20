import React from 'react'
import { MobileStepper, MobileStepperProps } from '../MobileStepper'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './MobileStepper.stories.gen'
import { useTheme } from '../../../theme/useTheme'
import { Box } from '../../Box/Box'
import { Paper } from '../../Paper/Paper'
import { Typography } from '../../Typography/Typography'
import { Button } from '../../Button/Button'
import { Icon } from '../../Icon/Icon'

export default { ...defaultStoryMeta }

const steps = [
  {
    label: 'Select campaign settings',
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    tabel: 'Create an ad group',
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

export const TextMobileStepper = story<MobileStepperProps>(
  function () {
    const theme = useTheme()
    const [activeStep, setActiveStep] = React.useState(0)
    const maxSteps = steps.length

    const handleNext = () => {
      setActiveStep(prevActiveStep => prevActiveStep + 1)
    }

    const handleBack = () => {
      setActiveStep(prevActiveStep => prevActiveStep - 1)
    }

    return (
      <Box sx={{ maxWidth: 400, flexGrow: 1, margin: 'auto' }}>
        <Paper
          square
          elevation={0}
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: 50,
            pl: 2,
            bgcolor: 'background.default',
          }}
        >
          <Typography>{steps[activeStep].label}</Typography>
        </Paper>
        <Box sx={{ height: 255, maxWidth: 400, width: '100%', p: 2 }}>
          {steps[activeStep].description}
        </Box>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === 'rtl' ? (
                <Icon>keyboard_arrow_left</Icon>
              ) : (
                <Icon>keyboard_arrow_right</Icon>
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === 'rtl' ? (
                <Icon>keyboard_arrow_right</Icon>
              ) : (
                <Icon>keyboard_arrow_left</Icon>
              )}
              Back
            </Button>
          }
        />
      </Box>
    )
  },
  {
    storyName: 'Mobile Stepper - text',
    parameters: {
      docs: {
        description: {
          story: `
This component implements a compact stepper suitable for a mobile device. 
It has more limited functionality than the vertical stepper.
See [mobile steps](https://material.io/archive/guidelines/components/steppers.html#steppers-types-of-steps) for its inspiration.

The mobile stepper supports three variants to display progress through the available steps: text, dots, and progress.
`,
        },
      },
    },
  },
)

export const DotsMobileStepper = story<MobileStepperProps>(
  function DotsMobileStepper() {
    const theme = useTheme()
    const [activeStep, setActiveStep] = React.useState(0)

    const handleNext = () => {
      setActiveStep(prevActiveStep => prevActiveStep + 1)
    }

    const handleBack = () => {
      setActiveStep(prevActiveStep => prevActiveStep - 1)
    }

    return (
      <MobileStepper
        variant="dots"
        steps={6}
        position="static"
        activeStep={activeStep}
        sx={{ maxWidth: 400, flexGrow: 1, margin: 'auto' }}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
            Next
            {theme.direction === 'rtl' ? (
              <Icon>keyboard_arrow_left</Icon>
            ) : (
              <Icon>keyboard_arrow_right</Icon>
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <Icon>keyboard_arrow_right</Icon>
            ) : (
              <Icon>keyboard_arrow_left</Icon>
            )}
            Back
          </Button>
        }
      />
    )
  },

  {
    storyName: 'Mobile Stepper - dots',
    parameters: {
      docs: {
        description: {
          story: 'Use dots when the number of steps is small.',
        },
      },
    },
  },
)
