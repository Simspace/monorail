// Edit this file to add new stories
import React from 'react'
import { WarningAmberTwoTone } from '@mui/icons-material'

import type { StepButtonProps } from '@monorail/components'
import { Box, Step, StepButton, StepLabel, Typography } from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default { title: 'Navigation/Stepper/StepButton', component: StepButton }

export const Default = story<StepButtonProps>(
  (args) => (
    <Box sx={{ width: '100%' }}>
      <Step>
        <StepButton {...args}>Click me</StepButton>
      </Step>
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
    muiName: 'MuiStepButton',
  },
)

/**
 * The `optional` prop can be used to provide text below the main button label.
 */
export const OptionalStepButton = story(() => (
  <Box sx={{ width: '100%' }}>
    <StepButton optional={<Typography variant='caption'>Optional</Typography>}>
      <StepLabel>Create an ad group</StepLabel>
    </StepButton>
  </Box>
))

/**
 * Similarly, the `icon` prop can be used to provide an icon next to the main button label.
 */
export const IconStepButton = story(() => (
  <Box sx={{ width: '100%' }}>
    <StepButton icon={<WarningAmberTwoTone />}>
      <StepLabel>Warning</StepLabel>
    </StepButton>
  </Box>
))
