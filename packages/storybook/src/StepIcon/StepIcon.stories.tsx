import React from 'react'
import {
  ApprovalTwoTone,
  ErrorOutlineSharp,
  IceSkatingOutlined,
  IceSkatingRounded,
  IceSkatingTwoTone,
  WarningAmberSharp,
} from '@mui/icons-material'

import type { StepIconProps } from '@monorail/components'
import { Box, Step, StepButton, StepIcon, StepLabel, Stepper } from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default { title: 'Navigation/Stepper/StepIcon', component: StepIcon }

/**
 * Steps have icons, but they don't do much on their own.
 */
export const Default = story<StepIconProps>(
  (args: Partial<StepIconProps>) => (
    <Box sx={{ width: '100%' }}>
      <Stepper>
        <Step>
          <StepLabel StepIconProps={args} />
        </Step>
      </Stepper>
    </Box>
  ),
  {
    muiName: 'MuiStepIcon',
  },
)

/**
 * Icons can be provided by way of the `StepLabel` component's `icon` prop.
 */
export const StepLabelIcon = story(() => (
  <Box sx={{ width: '100%' }}>
    <Stepper>
      <Step>
        <StepLabel icon={<WarningAmberSharp />}>Warning</StepLabel>
      </Step>
      <Step>
        <StepLabel icon={<ErrorOutlineSharp />}>Error</StepLabel>
      </Step>
      <Step>
        <StepLabel icon={<ApprovalTwoTone />}>Approval</StepLabel>
      </Step>
    </Stepper>
  </Box>
))

/**
 * The `StepButton` component also has an `icon` prop, used similarly to `StepLabel`.
 */
export const IconStepButton = story(() => (
  <Box sx={{ width: '100%' }}>
    <Stepper>
      <Step>
        <StepButton icon={<IceSkatingOutlined />}>IceSkatingOutlined</StepButton>
      </Step>
      <Step>
        <StepButton icon={<IceSkatingTwoTone />}>IceSkatingTwoTone</StepButton>
      </Step>
      <Step>
        <StepButton icon={<IceSkatingRounded />}>IceSkatingRounded</StepButton>
      </Step>
    </Stepper>
  </Box>
))
