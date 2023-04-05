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

/**
 * Metadata for Badge stories - update/extend as needed
 * This is intended to be exported as story-level metadata from the main .stories.tsx file, like:
 * "export default { ...defaultStoryMeta } // Add/extend as needed
 */
export default { title: 'Data Display/Badge', component: Badge }
/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
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
/** Default story for Badge (edit/remove by hand if needed) */
export const Default = story(Template)

const colors = [
  'default',
  'primary',
  'success',
  'error',
  'warning',
  'info',
] as const

export const Color = story(
  () => (
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
  ),
  {
    parameters: {
      docs: {
        description: {
          story: 'Use color prop to apply theme palette to component.',
        },
      },
    },
  },
)

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

export const CustomizedBadges = story(
  () => (
    <IconButton aria-label="cart" size="large">
      <StyledBadge badgeContent={4}>
        <MailIcon />
      </StyledBadge>
    </IconButton>
  ),
  {
    parameters: {
      docs: {
        description: {
          story:
            'Here is an example of customizing the component. You can learn more about this in the [overrides documentation page](https://material-ui.com/customization/components/).',
        },
      },
    },
  },
)

export const BadgeVisibility = story(
  () => {
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
  },
  {
    parameters: {
      docs: {
        description: {
          story:
            'The visibility of badges can be controlled using the `invisible` prop.',
        },
      },
    },
  },
)

export const ShowZeroBadge = story(
  () => (
    <Stack spacing={4} direction="row" sx={{ color: 'default.main' }}>
      <Badge badgeContent={0}>
        <MailIcon />
      </Badge>
      <Badge badgeContent={0} showZero>
        <MailIcon />
      </Badge>
    </Stack>
  ),
  {
    parameters: {
      docs: {
        description: {
          story:
            'The badge auto hides with badgeContent is zero. You can override this with the `showZero` prop.',
        },
      },
    },
  },
)

export const MaximumValue = story(
  () => (
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
  ),
  {
    parameters: {
      docs: {
        description: {
          story:
            'You can use the `max` prop to cap the value of the badge content.',
        },
      },
    },
  },
)

export const DotBadge = story(
  () => (
    <Box sx={{ color: 'default.main' }}>
      <Badge variant="dot">
        <MailIcon />
      </Badge>
    </Box>
  ),
  {
    parameters: {
      docs: {
        description: {
          story:
            'The `dot` prop changes a badge into a small dot. This can be used as a notification that something has changed without giving a count.',
        },
      },
    },
  },
)

const shapeStyles = { bgcolor: 'primary.dark', width: 40, height: 40 }
const shapeCircleStyles = { borderRadius: '50%' }
const rectangle = <Box component="span" sx={shapeStyles} />
const circle = (
  <Box component="span" sx={{ ...shapeStyles, ...shapeCircleStyles }} />
)

export const BadgeOverlap = story(
  () => (
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
  ),
  {
    parameters: {
      docs: {
        description: {
          story:
            'You can use the `overlap` prop to place the badge relative to the corner of the wrapped element.',
        },
      },
    },
  },
)

export const BadgeAlignment = story(Template, {
  args: {
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left',
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'You can use the `anchorOrigin` prop to move the badge to any corner of the wrapped element.',
      },
    },
  },
})

// const StyledBadgeUnstyled = styled(BadgeUnstyled)`
//   box-sizing: border-box;
//   margin: 0;
//   padding: 0;
//   color: rgba(0, 0, 0, 0.85);
//   font-size: 14px;
//   font-variant: tabular-nums;
//   list-style: none;
//   font-feature-settings: 'tnum';
//   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
//     'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
//     'Segoe UI Symbol';
//   position: relative;
//   display: inline-block;
//   line-height: 1;

//   & .MuiBadge-badge {
//     z-index: auto;
//     min-width: 20px;
//     height: 20px;
//     padding: 0 6px;
//     color: #fff;
//     font-weight: 400;
//     font-size: 12px;
//     line-height: 20px;
//     white-space: nowrap;
//     text-align: center;
//     background: #ff4d4f;
//     border-radius: 10px;
//     box-shadow: 0 0 0 1px #fff;
//   }

//   & .MuiBadge-dot {
//     padding: 0;
//     z-index: auto;
//     min-width: 6px;
//     width: 6px;
//     height: 6px;
//     background: #ff4d4f;
//     border-radius: 100%;
//     box-shadow: 0 0 0 1px #fff;
//   }

//   & .MuiBadge-anchorOriginTopRightCircular {
//     position: absolute;
//     top: 0;
//     right: 0;
//     transform: translate(50%, -50%);
//     transform-origin: 100% 0;
//   }
// `

// function BadgeContent() {
//   return (
//     <Box
//       component="span"
//       sx={{
//         width: 42,
//         height: 42,
//         borderRadius: '2px',
//         background: '#eee',
//         display: 'inline-block',
//         verticalAlign: 'middle',
//       }}
//     />
//   )
// }

// This story has not been updated for MUI v5 (GS 10/25/2021)
// export const Unstyled = story(
//   () => (
//     <Box sx={{ '& > :not(style) + :not(style)': { ml: 4 } }}>
//       <StyledBadgeUnstyled badgeContent={5} overlap="circular">
//         <BadgeContent />
//       </StyledBadgeUnstyled>
//       <StyledBadgeUnstyled badgeContent={5} variant="dot" overlap="circular">
//         <BadgeContent />
//       </StyledBadgeUnstyled>
//     </Box>
//   ),
//   {
//     parameters: {
//       docs: {
//         description: {
//           story: `The badge also comes with an unstyled version. It's ideal for doing heavy customizations and minimizing bundle size.`,
//         },
//       },
//     },
//   },
// )

function notificationsLabel(count: number) {
  if (count === 0) {
    return 'no notifications'
  }
  if (count > 99) {
    return 'more than 99 notifications'
  }
  return `${count} notifications`
}

export const Accessibility = story(
  () => (
    <IconButton aria-label={notificationsLabel(100)} size="large">
      <Badge badgeContent={100}>
        <MailIcon />
      </Badge>
    </IconButton>
  ),
  {
    parameters: {
      docs: {
        description: {
          story: `You can't rely on the content of the badge to be announced correctly. You should provide a full description, for instance, with \`aria-label\`:`,
        },
      },
    },
  },
)
