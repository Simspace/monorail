// Edit this file to add new stories
import React from 'react'
import AddIcon from '@mui/icons-material/Add'
import MailIcon from '@mui/icons-material/Mail'
import RemoveIcon from '@mui/icons-material/Remove'
import { styled } from '@mui/material/styles'

import type { BadgeProps } from '@monorail/components'
import {
  Badge,
  Box,
  Button,
  ButtonGroup,
  FormControlLabel,
  IconButton,
  Stack,
  Switch,
  Typography,
} from '@monorail/components'
import { PriorityHigh } from '@monorail/components/icons'

import { story } from '../helpers/storybook.js'

export default { title: 'Data Display/Badge', component: Badge }

const Template = story<BadgeProps>(
  args => (
    <Badge {...args}>
      <MailIcon color="default" />
    </Badge>
  ),
  {
    args: { badgeContent: 4, color: 'primary' },
    muiName: 'MuiBadge',
  },
)

export const Default = story(Template)

const colors = [
  'default',
  'primary',
  'success',
  'error',
  'warning',
  'info',
] as const

/**
 * Use `color` prop to apply theme palette to component.
 */
export const Color = story(() => (
  <Stack spacing={4}>
    {colors.map(color => (
      <Stack
        alignItems="center"
        direction="row"
        key={`badge-${color}`}
        spacing={6}
      >
        <Badge badgeContent={4} color={color}>
          <MailIcon color="default" />
        </Badge>
        <Typography>{color}</Typography>
      </Stack>
    ))}
  </Stack>
))

/**
 * Use the `badgeContent` prop to display an icon.
 */
export const Icon = story(args => (
  <Badge badgeContent={<PriorityHigh />} color="error" {...args}>
    <MailIcon color="default" />
  </Badge>
))

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))

/**
 * Here is an example of customizing the component. You can learn more about this in the [overrides documentation page](https://material-ui.com/customization/components/).
 */
export const CustomizedBadges = story(() => (
  <IconButton aria-label="cart" size="large">
    <StyledBadge badgeContent={4}>
      <MailIcon />
    </StyledBadge>
  </IconButton>
))

/**
 * The visibility of badges can be controlled using the `invisible` prop.
 */
export const BadgeVisibility = story(() => {
  const [count, setCount] = React.useState(1)
  const [invisible, setInvisible] = React.useState(false)

  const handleBadgeVisibility = () => {
    setInvisible(!invisible)
  }

  return (
    <Box
      sx={{
        color: 'default.main',
        display: 'flex',
        flexDirection: 'column',
        '& > *': {
          marginBottom: 2,
        },
        '& .MuiBadge-root': {
          marginRight: 4,
        },
      }}
    >
      <div>
        <Badge badgeContent={count}>
          <MailIcon />
        </Badge>
        <ButtonGroup>
          <Button
            aria-label="reduce"
            onClick={() => {
              setCount(Math.max(count - 1, 0))
            }}
          >
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            aria-label="increase"
            onClick={() => {
              setCount(count + 1)
            }}
          >
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
      </div>
      <div>
        <Badge variant="dot" invisible={invisible}>
          <MailIcon />
        </Badge>
        <FormControlLabel
          sx={{ color: 'text.primary' }}
          control={
            <Switch checked={!invisible} onChange={handleBadgeVisibility} />
          }
          label="Show Badge"
        />
      </div>
    </Box>
  )
})

/**
 * The badge auto hides with `badgeContent` is zero. You can override this with the `showZero` prop.
 */
export const ShowZeroBadge = story(() => (
  <Stack spacing={4} direction="row" sx={{ color: 'default.main' }}>
    <Badge badgeContent={0}>
      <MailIcon />
    </Badge>
    <Badge badgeContent={0} showZero>
      <MailIcon />
    </Badge>
  </Stack>
))

/**
 * You can use the `max` prop to cap the value of the badge content.
 */
export const MaximumValue = story(() => (
  <Stack spacing={8} direction="row" sx={{ color: 'default.main' }}>
    <Badge badgeContent={99}>
      <MailIcon />
    </Badge>
    <Badge badgeContent={100}>
      <MailIcon />
    </Badge>
    <Badge badgeContent={1000} max={999}>
      <MailIcon />
    </Badge>
  </Stack>
))

/**
 * The `dot` prop changes a badge into a small dot. This can be used as a notification that something has changed without giving a count.
 */
export const DotBadge = story(() => (
  <Box sx={{ color: 'default.main' }}>
    <Badge variant="dot">
      <MailIcon />
    </Badge>
  </Box>
))

const shapeStyles = { bgcolor: 'primary.dark', width: 40, height: 40 }
const shapeCircleStyles = { borderRadius: '50%' }
const rectangle = <Box component="span" sx={shapeStyles} />
const circle = (
  <Box component="span" sx={{ ...shapeStyles, ...shapeCircleStyles }} />
)

/**
 * You can use the `overlap` prop to place the badge relative to the corner of the wrapped element.
 */
export const BadgeOverlap = story(() => (
  <Stack spacing={3} direction="row">
    <Badge badgeContent=" ">{rectangle}</Badge>
    <Badge badgeContent=" " variant="dot">
      {rectangle}
    </Badge>
    <Badge overlap="circular" badgeContent=" ">
      {circle}
    </Badge>
    <Badge overlap="circular" badgeContent=" " variant="dot">
      {circle}
    </Badge>
  </Stack>
))

/**
 * You can use the `anchorOrigin` prop to move the badge to any corner of the wrapped element.
 */
export const BadgeAlignment = story(Template, {
  args: {
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left',
    },
  },
})

function notificationsLabel(count: number) {
  if (count === 0) {
    return 'no notifications'
  }
  if (count > 99) {
    return 'more than 99 notifications'
  }
  return `${count} notifications`
}

/**
 * You can't rely on the content of the badge to be announced correctly. You should provide a full description, for instance, with `aria-label`.
 */
export const Accessibility = story(() => (
  <IconButton aria-label={notificationsLabel(100)} size="large">
    <Badge badgeContent={100}>
      <MailIcon />
    </Badge>
  </IconButton>
))
