// Edit this file to add new stories
import React from 'react'
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material'
import { Box, Icon, IconProps, Stack, styled, Typography } from '@mui/material'

import { story } from '../../../__tests__/helpers/storybook'
import * as Icons from '../../../icons/Icons'
import { Illustration } from '../../../icons/Illustration'
/**
 * Metadata for Icon stories - update/extend as needed
 */
export default { title: 'Data Display/Icon', component: Icon }

const IconsContainer = styled('div')`
  svg {
    font-size: 32px;
  }
`
/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<IconProps>(
  (args: IconProps) => (
    <IconsContainer>
      <Box>
        <Typography variant="h3">Monorail3 Icons</Typography>
        <Stack direction="row" gap={3}>
          <AccessAlarm />
          <ThreeDRotation />
        </Stack>
      </Box>
      <Box mt={4}>
        <Typography variant="h3">Monorail v2 Icons</Typography>
        <Stack direction="row" gap={3}>
          <Icons.Home />
          <Icons.Academy />
          <Icon {...args} />
        </Stack>
      </Box>
      <Box mt={4}>
        <Typography variant="h3">Monorail v2 Illustrations</Typography>
        <Stack direction="row" gap={3}>
          <Illustration Svg={Icons.Calendar} $width={120} $height={120} />
          <Illustration Svg={Icons.ErrorRobot} $width={120} $height={120} />
          <Icon {...args} />
        </Stack>
      </Box>
    </IconsContainer>
  ),
  {
    args: {},
  },
)
/** Default story for Icon (edit/remove by hand if needed) */
export const Default = story(Template)
// TODO: add more stories below
