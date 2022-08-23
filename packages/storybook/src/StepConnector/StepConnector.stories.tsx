import React from 'react'
import {
  Box,
  Step,
  StepConnector,
  StepConnectorProps,
  StepLabel,
  Stepper,
} from '@monorail/components'

import { story } from '../helpers/storybook.js'
/**
 * Metadata for StepConnector stories - update/extend as needed
 */
export default {
  title: 'Navigation/Stepper/StepConnector',
  component: StepConnector,
}

export const Default = story<StepConnectorProps>(
  args => (
    <Box sx={{ width: '100%' }}>
      <Stepper connector={<StepConnector {...args} />}>
        <Step>
          <StepLabel>Click me</StepLabel>
        </Step>
        <Step>
          <StepLabel>Not me</StepLabel>
        </Step>
        <Step>
          <StepLabel>Click me</StepLabel>
        </Step>
      </Stepper>
    </Box>
  ),
  {
    parameters: {
      docs: {
        description: {
          component: `
A line that connects steps visually. Reacts to things like orientation and active state of a given \`Step\`.
`,
        },
      },
    },
    muiName: 'MuiStepConnector',
  },
)

export const Custom = story(
  () => (
    <Box sx={{ width: '100%' }}>
      <Stepper
        connector={
          <div style={{ border: '1px solid red', flex: '1 1 auto' }} />
        }
      >
        <Step>
          <StepLabel>Click me</StepLabel>
        </Step>
        <Step>
          <StepLabel>Not me</StepLabel>
        </Step>
        <Step>
          <StepLabel>Click me</StepLabel>
        </Step>
      </Stepper>
    </Box>
  ),
  {
    parameters: {
      docs: {
        description: {
          story: `
The \`Stepper\` component has a \`connector\` prop, which can be any JSX element. Careful with the flex!
`,
        },
      },
    },
  },
)
