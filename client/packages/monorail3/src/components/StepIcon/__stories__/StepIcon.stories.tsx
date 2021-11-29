import React from 'react'
import {
  ApprovalTwoTone,
  ErrorOutlineSharp,
  IceSkatingOutlined,
  IceSkatingRounded,
  IceSkatingTwoTone,
  WarningAmberSharp,
} from '@mui/icons-material'

import { story } from '../../../__tests__/helpers/storybook'
import { Box } from '../../Box/Box'
import { Step } from '../../Step/Step'
import { StepButton } from '../../StepButton/StepButton'
import { StepLabel } from '../../StepLabel/StepLabel'
import { Stepper } from '../../Stepper/Stepper'
import { Typography } from '../../Typography/Typography'
import { StepIcon, StepIconProps } from '../StepIcon'
import { defaultStoryMeta } from './StepIcon.stories.gen'
/**
 * Metadata for StepIcon stories - update/extend as needed
 */
export default { ...defaultStoryMeta, title: 'Navigation/Stepper/StepIcon' }
/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */

export const Default = story<StepIconProps>(
  args => (
    <Box sx={{ width: '100%' }}>
      <Stepper>
        <Step>
          <StepIcon {...args} icon={<IceSkatingOutlined />} />
        </Step>
        <Step>
          <StepIcon icon={<IceSkatingTwoTone />} />
        </Step>
        <Step>
          <StepIcon icon={<IceSkatingRounded />} />
        </Step>
      </Stepper>
    </Box>
  ),
  {
    parameters: {
      docs: {
        description: {
          component: `
Steps have icons, but they don't do much on their own.
`,
        },
      },
    },
  },
)

export const StepLabelIcon = story(
  () => (
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
  ),
  {
    parameters: {
      docs: {
        description: {
          story: `
Icons can be provided by way of the \`StepLabel\` component's \`icon\` prop.
`,
        },
      },
    },
  },
)

export const IconStepButton = story(
  () => (
    <Box sx={{ width: '100%' }}>
      <Stepper>
        <Step>
          <StepButton icon={<IceSkatingOutlined />}>
            IceSkatingOutlined
          </StepButton>
        </Step>
        <Step>
          <StepButton icon={<IceSkatingTwoTone />}>
            IceSkatingTwoTone
          </StepButton>
        </Step>
        <Step>
          <StepButton icon={<IceSkatingRounded />}>
            IceSkatingRounded
          </StepButton>
        </Step>
      </Stepper>
    </Box>
  ),
  {
    parameters: {
      docs: {
        description: {
          story: `
The \`StepButton\` component also has an \`icon\` prop, used similarly to \`StepLabel\`.
`,
        },
      },
    },
  },
)
