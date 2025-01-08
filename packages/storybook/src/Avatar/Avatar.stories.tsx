// Edit this file to add new stories
import React from 'react'
import { Person } from '@mui/icons-material'
import AssignmentIcon from '@mui/icons-material/Assignment'
import FolderIcon from '@mui/icons-material/Folder'
import PageviewIcon from '@mui/icons-material/Pageview'
import { styled } from '@mui/material/styles'

import type { AvatarProps } from '@monorail/components'
import { Avatar, Badge, Stack, Typography } from '@monorail/components'
import { AccountGroup } from '@monorail/components/icons'

import { story } from '../helpers/storybook.js'

export default { title: 'Data Display/Avatar', component: Avatar }

const Template = story<AvatarProps>((args) => <Avatar {...args} />, {
  args: { children: 'AZ' },
  muiName: 'MuiAvatar',
})

export const Default = story(Template)

/**
 * Image avatars can be created by passing standard img props `src` or `srcSet` to the component.
 */
export const ImageAvatars = story<AvatarProps>(
  () => {
    return (
      <Stack direction='row' spacing={2}>
        <Avatar alt='Good Boi' src='https://images.dog.ceo/breeds/boxer/n02108089_11154.jpg' />
        <Avatar alt='Good Boi' src='https://images.dog.ceo/breeds/labrador/n02099712_4323.jpg' />
        <Avatar
          alt='Good Boi'
          src='https://images.dog.ceo/breeds/sheepdog-english/n02105641_10048.jpg'
        />
      </Stack>
    )
  },
  {
    parameters: {
      creevey: {
        skip: "Images don't load reliably",
      },
    },
  },
)

/**
 * Avatars containing simple characters can be created by passing a string as children.
 */
export const LetterAvatars = story<AvatarProps>(() => {
  return (
    <Stack direction='row' spacing={2}>
      <Avatar sx={{ bgcolor: 'primary.main' }}>N</Avatar>
      {/* or */}
      <Avatar
        sx={(theme) => ({
          bgcolor: theme.palette.warning.main,
          color: theme.palette.warning.contrastText,
        })}
      >
        OP
      </Avatar>
    </Stack>
  )
})

/**
 * You can change the size of the avatar with the `height` and `width` CSS properties.
 *
 * We only use two sizes: 40px x 40px (default) and 32px x 32px.
 */
export const Sizes = story<AvatarProps>(
  () => {
    return (
      <Stack direction='row' spacing={2}>
        <Avatar
          alt='Good Boi'
          src='https://images.dog.ceo/breeds/labrador/n02099712_4323.jpg'
          size='small'
        />
        <Avatar alt='Good Boi' src='https://images.dog.ceo/breeds/labrador/n02099712_4323.jpg' />
        <Avatar size='small'>
          <Person />
        </Avatar>
        <Avatar>
          <Person fontSize='large' />
        </Avatar>
        <Avatar variant='rounded' size='small'>
          <AccountGroup />
        </Avatar>
        <Avatar variant='rounded'>
          <AccountGroup fontSize='large' />
        </Avatar>
      </Stack>
    )
  },
  {
    parameters: {
      creevey: {
        skip: "Images don't load reliably",
      },
    },
  },
)

/**
 * Icon avatars are created by passing an icon as children.
 */
export const IconAvatars = story<AvatarProps>(() => {
  return (
    <Stack direction='row' spacing={2}>
      <Avatar>
        <FolderIcon />
      </Avatar>
      <Avatar>
        <Person />
      </Avatar>
      <Avatar variant='rounded'>
        <AccountGroup fontSize='large' />
      </Avatar>
      <Avatar sx={{ bgcolor: 'primary.main' }}>
        <PageviewIcon />
      </Avatar>
      <Avatar sx={{ bgcolor: 'secondary.main' }}>
        <AssignmentIcon />
      </Avatar>
    </Stack>
  )
})

/**
 * We only use the `rounded` and `circular` variants in our designs.
 */
export const Variants = story<AvatarProps>(() => {
  const variants = ['rounded', 'circular'] as const
  return (
    <Stack direction='row' spacing={8}>
      {variants.map((variant) => (
        <Stack direction='column' spacing={2} key={variant} alignItems='center'>
          <Typography variant='h3'>{variant}</Typography>
          <Typography>32px x 32px</Typography>
          <Avatar variant={variant} size='small'>
            WW
          </Avatar>
          <Avatar variant={variant} size='small'>
            <Person />
          </Avatar>
          <Avatar variant={variant} size='small'>
            <AccountGroup />
          </Avatar>
          <Typography>40px x 40px</Typography>
          <Avatar variant={variant}>WW</Avatar>
          <Avatar variant={variant}>
            <Person fontSize='large' />
          </Avatar>
          <Avatar variant={variant}>
            <AccountGroup fontSize='large' />
          </Avatar>
        </Stack>
      ))}
    </Stack>
  )
})

/**
 * If there is an error loading the avatar image, the component falls back to an alternative in the following order:
 *
 * 1. the provided children
 * 2. the first letter of the alt text
 * 3. a generic avatar icon
 */
export const Fallbacks = story<AvatarProps>(() => {
  return (
    <Stack direction='row' spacing={2}>
      <Avatar sx={{ bgcolor: 'primary.main' }} alt='Remy Sharp' src='/broken-image.jpg'>
        B
      </Avatar>
      <Avatar sx={{ bgcolor: 'primary.main' }} alt='Remy Sharp' src='/broken-image.jpg' />
      <Avatar alt='oh no' src='/broken-image.jpg' />
    </Stack>
  )
})

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}))

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}))

/**
 * Extra adornments like badges can be added to Avatars.
 */
export const WithBadge = story<AvatarProps>(
  () => {
    return (
      <Stack direction='row' spacing={2}>
        <StyledBadge
          overlap='circular'
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          variant='dot'
        >
          <Avatar alt='Good Boi' src='https://images.dog.ceo/breeds/puggle/IMG_070809.jpg' />
        </StyledBadge>
        <Badge
          overlap='circular'
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          badgeContent={
            <SmallAvatar alt='Smol Boi' src='https://images.dog.ceo/breeds/puggle/IMG_070809.jpg' />
          }
        >
          <Avatar alt='Good Boi' src='https://images.dog.ceo/breeds/puggle/IMG_104458.jpg' />
        </Badge>
      </Stack>
    )
  },
  {
    parameters: {
      creevey: {
        skip: "Images don't load reliably",
      },
    },
  },
)
