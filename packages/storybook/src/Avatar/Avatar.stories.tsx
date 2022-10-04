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

/**
 * Metadata for Avatar stories - update/extend as needed
 * This is intended to be exported as story-level metadata from the main .stories.tsx file, like:
 * "export default { ...defaultStoryMeta } // Add/extend as needed
 */
export default { title: 'Data Display/Avatar', component: Avatar }

/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<AvatarProps>(args => <Avatar {...args} />, {
  args: { children: 'AZ' },
  muiName: 'MuiAvatar',
})

/** Default story for Avatar (edit/remove by hand if needed) */
export const Default = story(Template)

export const ImageAvatars = story<AvatarProps>(() => {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        alt="Good Boi"
        src="https://images.dog.ceo/breeds/boxer/n02108089_11154.jpg"
      />
      <Avatar
        alt="Good Boi"
        src="https://images.dog.ceo/breeds/labrador/n02099712_4323.jpg"
      />
      <Avatar
        alt="Good Boi"
        src="https://images.dog.ceo/breeds/sheepdog-english/n02105641_10048.jpg"
      />
    </Stack>
  )
})

ImageAvatars.parameters = {
  docs: {
    description: {
      story: `Image avatars can be created by passing standard img props src or srcSet to the component.`,
    },
  },
  creevey: {
    skip: "Images don't load reliably",
  },
}

export const LetterAvatars = story<AvatarProps>(
  () => {
    return (
      <Stack direction="row" spacing={2}>
        <Avatar sx={{ bgcolor: 'primary.main' }}>N</Avatar>
        {/* or */}
        <Avatar
          sx={theme => ({
            bgcolor: theme.palette.warning.main,
            color: theme.palette.warning.contrastText,
          })}
        >
          OP
        </Avatar>
      </Stack>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `Avatars containing simple characters can be created by passing a string as children.`,
        },
      },
    },
  },
)

export const Sizes = story<AvatarProps>(() => {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        alt="Good Boi"
        src="https://images.dog.ceo/breeds/labrador/n02099712_4323.jpg"
        sx={{ width: 32, height: 32 }}
      />
      <Avatar
        alt="Good Boi"
        src="https://images.dog.ceo/breeds/labrador/n02099712_4323.jpg"
      />
      <Avatar sx={{ width: 32, height: 32 }}>
        <Person />
      </Avatar>
      <Avatar>
        <Person fontSize="large" />
      </Avatar>
      <Avatar variant="rounded" sx={{ width: 32, height: 32 }}>
        <AccountGroup />
      </Avatar>
      <Avatar variant="rounded">
        <AccountGroup fontSize="large" />
      </Avatar>
    </Stack>
  )
})

Sizes.parameters = {
  docs: {
    description: {
      story: `You can change the size of the avatar with the height and width CSS properties.
      
We only use two sizes: 40px x 40px (default) and 32px x 32px.`,
    },
  },
  creevey: {
    skip: "Images don't load reliably",
  },
}

export const IconAvatars = story<AvatarProps>(
  () => {
    return (
      <Stack direction="row" spacing={2}>
        <Avatar>
          <FolderIcon />
        </Avatar>
        <Avatar>
          <Person />
        </Avatar>
        <Avatar variant="rounded">
          <AccountGroup fontSize="large" />
        </Avatar>
        <Avatar sx={{ bgcolor: 'primary.main' }}>
          <PageviewIcon />
        </Avatar>
        <Avatar sx={{ bgcolor: 'secondary.main' }}>
          <AssignmentIcon />
        </Avatar>
      </Stack>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `Icon avatars are created by passing an icon as children.`,
        },
      },
    },
  },
)

export const Variants = story<AvatarProps>(
  () => {
    const variants = ['rounded', 'circular'] as const
    return (
      <Stack direction="row" spacing={8}>
        {variants.map(variant => (
          <Stack
            direction="column"
            spacing={2}
            key={variant}
            alignItems="center"
          >
            <Typography variant="h3">{variant}</Typography>
            <Typography>32px x 32px</Typography>
            <Avatar variant={variant} sx={{ width: 32, height: 32 }}>
              WW
            </Avatar>
            <Avatar variant={variant} sx={{ width: 32, height: 32 }}>
              <Person />
            </Avatar>
            <Avatar variant={variant} sx={{ width: 32, height: 32 }}>
              <AccountGroup />
            </Avatar>
            <Typography>40px x 40px</Typography>
            <Avatar variant={variant}>WW</Avatar>
            <Avatar variant={variant}>
              <Person fontSize="large" />
            </Avatar>
            <Avatar variant={variant}>
              <AccountGroup fontSize="large" />
            </Avatar>
          </Stack>
        ))}
      </Stack>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `We only use the rounded and circular variants in our designs.`,
        },
      },
    },
  },
)

export const Fallbacks = story<AvatarProps>(
  () => {
    return (
      <Stack direction="row" spacing={2}>
        <Avatar
          sx={{ bgcolor: 'primary.main' }}
          alt="Remy Sharp"
          src="/broken-image.jpg"
        >
          B
        </Avatar>
        <Avatar
          sx={{ bgcolor: 'primary.main' }}
          alt="Remy Sharp"
          src="/broken-image.jpg"
        />
        <Avatar alt="oh no" src="/broken-image.jpg" />
      </Stack>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `If there is an error loading the avatar image, the component falls back to an alternative in the following order:

- the provided children
- the first letter of the alt text
- a generic avatar icon`,
        },
      },
    },
  },
)

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

export const WithBadge = story<AvatarProps>(() => {
  return (
    <Stack direction="row" spacing={2}>
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >
        <Avatar
          alt="Good Boi"
          src="https://images.dog.ceo/breeds/puggle/IMG_070809.jpg"
        />
      </StyledBadge>
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        badgeContent={
          <SmallAvatar
            alt="Smol Boi"
            src="https://images.dog.ceo/breeds/puggle/IMG_070809.jpg"
          />
        }
      >
        <Avatar
          alt="Good Boi"
          src="https://images.dog.ceo/breeds/puggle/IMG_104458.jpg"
        />
      </Badge>
    </Stack>
  )
})

WithBadge.parameters = {
  docs: {
    description: {
      story: `Extra adornments like badges can be added to Avatars.`,
    },
  },
  creevey: {
    skip: "Images don't load reliably",
  },
}
