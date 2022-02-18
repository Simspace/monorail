// Edit this file to add new stories
import React from 'react'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import ThreeDRotation from '@mui/icons-material/ThreeDRotation'
import { Box, Icon, IconProps, Stack, styled, Typography } from '@mui/material'

// import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
import { story } from '../../../__tests__/helpers/storybook'
import * as Icons from '../../../icons/Icons'
// import { Illustration } from '../../../icons/Illustration'
/**
 * Metadata for Icon stories - update/extend as needed
 */
export default { title: 'Data Display/Icon', component: Icon }

const IconsContainer = styled('div')`
  svg {
    font-size: 32px;
  }
`

// const Academy = (props: SvgIconProps) => (
//   <SvgIcon {...props}>
//     <path
//       fillRule="evenodd"
//       clipRule="evenodd"
//       d="M7 11.375L12 12.625L17 11.375V13.875C15.9942 15.7609 12 15.75 12 15.75C12 15.75 7.96909 15.692 7 13.875V11.375Z"
//     />
//     <path
//       fillRule="evenodd"
//       clipRule="evenodd"
//       d="M12 7L2 9.5L12 12L22 9.5L12 7Z"
//     />
//     <path
//       fillRule="evenodd"
//       clipRule="evenodd"
//       d="M19.5 15.4375C19.5 15.832 19.2563 16.1696 18.9112 16.308L20.125 18.875C19.6042 19.0833 19.0833 19.1875 18.5625 19.1875C18.0417 19.1875 17.5208 19.0833 17 18.875L18.2138 16.308C17.8687 16.1696 17.625 15.832 17.625 15.4375C17.625 15.0293 17.8859 14.682 18.25 14.5533V10.125H18.875V14.5533C19.2391 14.682 19.5 15.0293 19.5 15.4375Z"
//     />
//   </SvgIcon>
// )

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
          <AccessAlarmIcon />
          <ThreeDRotation />
        </Stack>
      </Box>
      <Box mt={4}>
        <Typography variant="h3">Monorail v2 Icons</Typography>
        <Stack direction="row" gap={3}>
          {/* <Icons.Home /> */}
          {/* <Academy /> */}
          <Icons.Academy />
          <Icon {...args} />
        </Stack>
      </Box>
      <Box mt={4}>
        <Typography variant="h3">Monorail v2 Illustrations</Typography>
        <Stack direction="row" gap={3}>
          {/* <Illustration Svg={Icons.Calendar} $width={120} $height={120} />
          <Illustration Svg={Icons.ErrorRobot} $width={120} $height={120} /> */}
          {/* <Icon {...args} /> */}
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
