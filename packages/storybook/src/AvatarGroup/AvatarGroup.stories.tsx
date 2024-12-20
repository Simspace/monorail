// Edit this file to add new stories
import React from 'react'

import type { AvatarGroupProps } from '@monorail/components'
import { Avatar, AvatarGroup, Box, Stack, Typography } from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default { title: 'Data Display/AvatarGroup', component: AvatarGroup }

const Template = story<AvatarGroupProps>(
  (args) => (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <AvatarGroup {...args}>
        <Avatar>A</Avatar>
        <Avatar>B</Avatar>
        <Avatar>C</Avatar>
      </AvatarGroup>
    </Box>
  ),
  {
    args: {},
    muiName: 'MuiAvatarGroup',
  },
)

export const Default = story(Template)

/**
 * Use the `max` prop to limit the number of avatars shown
 */
export const Max = story<AvatarGroupProps>(() => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <AvatarGroup max={4}>
        <Avatar alt='Rover' src='https://images.dog.ceo/breeds/terrier-fox/n02095314_2247.jpg' />
        <Avatar alt='Brutus' src='https://images.dog.ceo/breeds/kuvasz/n02104029_1324.jpg' />
        <Avatar alt='Spot' src='https://images.dog.ceo/breeds/lhasa/n02098413_12117.jpg' />
        <Avatar alt='Spike' src='https://images.dog.ceo/breeds/vizsla/n02100583_12639.jpg' />
        <Avatar alt='Buddy' src='https://images.dog.ceo/breeds/chow/n02112137_7340.jpg' />
      </AvatarGroup>
    </Box>
  )
})

Max.parameters = {
  creevey: {
    skip: "Images don't load reliably",
  },
}

export const Spacing = story<AvatarGroupProps>(() => {
  return (
    <Stack direction='column' gap={4}>
      <Typography variant='subtitle1'>Medium</Typography>
      <AvatarGroup spacing='medium'>
        <Avatar>OP</Avatar>
        <Avatar>OP</Avatar>
        <Avatar>OP</Avatar>
        <Avatar>OP</Avatar>
        <Avatar>OP</Avatar>
        <Avatar>OP</Avatar>
        <Avatar>OP</Avatar>
      </AvatarGroup>
      <Typography variant='subtitle1'>Small</Typography>
      <AvatarGroup spacing='small'>
        <Avatar>OP</Avatar>
        <Avatar>OP</Avatar>
        <Avatar>OP</Avatar>
        <Avatar>OP</Avatar>
        <Avatar>OP</Avatar>
        <Avatar>OP</Avatar>
        <Avatar>OP</Avatar>
      </AvatarGroup>
    </Stack>
  )
})

export const Total = story<AvatarGroupProps>(() => {
  return (
    <Stack direction='column' gap={4}>
      <AvatarGroup total={10}>
        <Avatar>OP</Avatar>
        <Avatar>OP</Avatar>
        <Avatar>OP</Avatar>
        <Avatar>OP</Avatar>
        <Avatar>OP</Avatar>
      </AvatarGroup>
    </Stack>
  )
})
