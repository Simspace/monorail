import React from 'react'

import type { StepConnectorProps } from '@monorail/components'
import {
  Box,
  Step,
  StepConnector,
  StepLabel,
  Stepper,
} from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default {
  title: 'Navigation/Stepper/StepConnector',
  component: StepConnector,
}

/**
 * A line that connects steps visually. Reacts to things like orientation and active state of a given `Step`.
 */
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
    muiName: 'MuiStepConnector',
  },
)

/**
 * The `Stepper` component has a `connector` prop, which can be any JSX element. Careful with the flex!
 */
export const Custom = story(() => (
  <Box sx={{ width: '100%' }}>
    <Stepper
      connector={<div style={{ border: '1px solid red', flex: '1 1 auto' }} />}
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
))
