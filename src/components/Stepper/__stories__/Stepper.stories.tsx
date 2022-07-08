import React from 'react'
import { Check, GroupAdd, Settings, VideoLabel } from '@mui/icons-material'

import {
  Box,
  Button,
  Paper,
  Stack,
  Step,
  StepButton,
  StepConnector,
  stepConnectorClasses,
  StepContent,
  StepIconProps,
  StepLabel,
  Stepper,
  StepperProps,
  styled,
  Typography,
} from '../../..'
import { story } from '../../../test-helpers/storybook'
/**
 * Metadata for Stepper stories - update/extend as needed
 */
export default { title: 'Navigation/Stepper', component: Stepper }
/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<StepperProps>(
  (args: StepperProps) => (
    <Stepper {...args}>
      <Step>
        <StepLabel>A longer step title</StepLabel>
      </Step>
      <Step>
        <StepLabel>Step title</StepLabel>
      </Step>
      <Step>
        <StepLabel>Step title</StepLabel>
      </Step>
    </Stepper>
  ),
  { muiName: 'MuiStepper' },
)
/** Default story for Stepper (edit/remove by hand if needed) */
export const Default = story(Template, {
  args: { activeStep: 0 },
})

const steps = [
  'Plan Details',
  'Prerequisites',
  'Content Modules',
  'Assessments',
  'Event Options',
]

const steps3 = [
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

function HorizontalLinearStepperBase() {
  const [activeStep, setActiveStep] = React.useState(0)

  const isStepComplete = (step: number) => activeStep > step

  const isStepIncomplete = (step: number) => activeStep < step

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
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {}
          const labelProps: {
            optional?: React.ReactNode
          } = {}
          if (isStepComplete(index)) {
            labelProps.optional = (
              <Typography variant="caption">Complete</Typography>
            )
          }
          if (isStepIncomplete(index)) {
            labelProps.optional = (
              <Typography variant="caption">Incomplete</Typography>
            )
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          )
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              variant="text"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 2 }}
            >
              Back
            </Button>
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  )
}

export const HorizontalLinearStepper = story(HorizontalLinearStepperBase, {
  storyName: 'Horizontal Linear Stepper',
  parameters: {
    docs: {
      description: {
        story: `
The \`Stepper\` can be controlled by passing the current step index (zero-based) 
as the activeStep property. Stepper orientation is set using the \`orientation\` property.
This example also shows the use of an optional step by placing the optional property on 
the second Step component. Note that it's up to you to manage when an optional step is skipped.
Once you've determined this for a particular step you must set \`completed={false}\` to signify 
that even though the active step index has gone beyond the optional step, it's not actually 
complete.`,
      },
    },
  },
})

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
            steps.findIndex((_step, i) => !(i in completed))
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
                  variant="text"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 2 }}
                >
                  Back
                </Button>
                <Button onClick={handleNext} sx={{ mr: 2 }}>
                  Next
                </Button>
                <Box sx={{ flex: '1 1 auto' }} />
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

export const HorizontalLabelPositionBelowStepper = story(
  function () {
    return (
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={1} alternativeLabel>
          <Step>
            <StepLabel optional="Optional">Step title</StepLabel>
          </Step>
          <Step>
            <StepLabel optional="Optional">Step title</StepLabel>
          </Step>
          <Step>
            <StepLabel>Step title</StepLabel>
          </Step>
        </Stepper>
      </Box>
    )
  },

  {
    storyName: 'Alternative label',
    parameters: {
      docs: {
        description: {
          story: `
Labels can be placed below the step icon by setting the \`alternativeLabel\` prop on the \`Stepper\` component.
`,
        },
      },
    },
  },
)

export const ErrorStep = story(function () {
  const isStepFailed = (step: number) => {
    return step === 1
  }

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
})

// This story leverages MUI's `styled` helper

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#784af4',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#784af4',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
  },
}))

const QontoStepIconRoot = styled('div')<{ styleProps: { active?: boolean } }>(
  ({ theme, styleProps: { active = false } }) => ({
    color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
    ...(active && {
      color: '#784af4',
    }),
    '& .QontoStepIcon-completedIcon': {
      color: '#784af4',
      zIndex: 1,
      fontSize: 18,
    },
    '& .QontoStepIcon-circle': {
      width: 8,
      height: 8,
      borderRadius: '50%',
      backgroundColor: 'currentColor',
    },
  }),
)

function QontoStepIcon(props: StepIconProps) {
  const { active, completed = false, className } = props

  return (
    <QontoStepIconRoot styleProps={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  )
}

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1,
  },
}))

const ColorlibStepIconRoot = styled('div')<{
  styleProps: { completed?: boolean; active?: boolean }
}>(({ theme, styleProps: { completed = false, active = false } }) => ({
  backgroundColor:
    theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(active && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(completed && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  }),
}))

function ColorlibStepIcon(props: StepIconProps) {
  const { active, completed, className } = props

  const icons: { [index: string]: React.ReactElement } = {
    1: <Settings />,
    2: <GroupAdd />,
    3: <VideoLabel />,
  }

  return (
    <ColorlibStepIconRoot
      styleProps={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  )
}

export const CustomizedSteppers = story(
  function () {
    return (
      <Stack sx={{ width: '100%' }} spacing={4}>
        <Stepper alternativeLabel activeStep={1} connector={<QontoConnector />}>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Stepper
          alternativeLabel
          activeStep={1}
          connector={<ColorlibConnector />}
        >
          {steps.map(label => (
            <Step key={label}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Stack>
    )
  },
  {
    storyName: 'Customized horizontal stepper',
    parameters: {
      docs: {
        description: {
          story: `
Here is an example of customizing the component. You can learn more about 
this in the [overrides documentation page](https://next.material-ui.com/customization/how-to-customize/).
`,
        },
      },
    },
  },
)

export const VerticalLinearStepper = story(
  function () {
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
          {steps3.map((step, index) => (
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
              <StepContent>
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
  },
  {
    storyName: 'Vertical stepper',
    parameters: {
      docs: {
        description: {
          story: `
Vertical steppers are designed for narrow screen sizes. They are 
ideal for mobile. All the features of the horizontal stepper can be implemented.
`,
        },
      },
    },
  },
)
