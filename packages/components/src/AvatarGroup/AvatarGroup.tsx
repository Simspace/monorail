/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React from 'react'
import { isFragment } from 'react-is'
import type { AvatarGroupProps, AvatarProps } from '@mui/material'
import {
  Avatar,
  avatarClasses,
  avatarGroupClasses,
  getAvatarGroupUtilityClass,
  styled,
  useThemeProps,
} from '@mui/material'
import composeClasses from '@mui/utils/composeClasses'
import clsx from 'clsx'

const SPACINGS = {
  small: -20,
  medium: -12,
}

interface AvatarGroupOwnerState extends AvatarGroupProps {}

const useUtilityClasses = (ownerState: AvatarGroupOwnerState) => {
  const { classes } = ownerState

  const slots = {
    root: ['root'],
    avatar: ['avatar'],
  }

  return composeClasses(slots, getAvatarGroupUtilityClass, classes)
}

const AvatarGroupRoot = styled('div', {
  name: 'MuiAvatarGroup',
  slot: 'Root',
  overridesResolver: (props, styles) => [
    { [`& .${avatarGroupClasses.avatar}`]: styles.avatar },
    styles.root,
  ],
})<{ ownerState: AvatarGroupOwnerState }>(({ theme }) => ({
  [`& .${avatarClasses.root}`]: {
    border: `2px solid ${theme.palette.background.default}`,
    boxSizing: 'content-box',
    marginLeft: -8,
    '&:first-child': {
      marginLeft: 0,
    },
  },
  display: 'flex',
  flexDirection: 'row',
}))

const AvatarGroupAvatar = styled(Avatar, {
  name: 'MuiAvatarGroup',
  slot: 'Avatar',
  overridesResolver: (props, styles) => styles.avatar,
})<{ ownerState: AvatarGroupOwnerState }>(({ theme }) => ({
  border: `2px solid ${theme.palette.background.default}`,
  boxSizing: 'content-box',
  marginLeft: -8,
  '&:first-child': {
    marginLeft: 0,
  },
}))

/**
 *
 * Demos:
 *
 * - [AvatarGroup](https://simspace.gitlab.io/engineering/ux-engineering/monorail/main/storybook/?path=/docs/data-display-avatargroup--default)
 * - [Avatars (MUI)](https://mui.com/material-ui/react-avatar/)
 *
 * API:
 *
 * - [AvatarGroup API](https://mui.com/material-ui/api/avatar-group/)
 */
export const AvatarGroup = React.forwardRef(function AvatarGroup(
  inProps,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiAvatarGroup',
  })

  const {
    children: childrenProp,
    className,
    component = 'div',
    slotProps = {},
    max = 5,
    spacing = 'medium',
    total,
    variant = 'circular',
    ...other
  } = props
  let clampedMax = max < 2 ? 2 : max

  const ownerState = {
    ...props,
    max,
    spacing,
    component,
    variant,
  }

  const classes = useUtilityClasses(ownerState)

  const children = React.Children.toArray(childrenProp).filter(
    (child): child is React.ReactElement<AvatarProps> => {
      if (process.env.NODE_ENV !== 'production') {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        if (isFragment(child)) {
          // eslint-disable-next-line no-console
          console.error(
            [
              "MUI: The AvatarGroup component doesn't accept a Fragment as a child.",
              'Consider providing an array instead.',
            ].join('\n'),
          )
        }
      }

      return React.isValidElement(child)
    },
  )

  const totalAvatars = total || children.length

  if (totalAvatars === clampedMax) {
    clampedMax += 1
  }

  clampedMax = Math.min(totalAvatars + 1, clampedMax)

  const maxAvatars = Math.min(children.length, clampedMax - 1)
  const extraAvatars = Math.max(
    totalAvatars - clampedMax,
    totalAvatars - maxAvatars,
    0,
  )

  const marginLeft =
    spacing && typeof spacing !== 'number' && SPACINGS[spacing] !== undefined
      ? SPACINGS[spacing]
      : -spacing

  return (
    <AvatarGroupRoot
      as={component}
      ownerState={ownerState}
      className={clsx(classes.root, className)}
      ref={ref}
      {...other}
    >
      {children.slice(0, maxAvatars).map((child, index) => {
        return React.cloneElement(child, {
          className: clsx(child.props.className, classes.avatar),
          style: {
            // Consistent with "&:first-child" styling for the default spacing,
            // we do not apply custom marginLeft spacing on the last child
            marginLeft: index === 0 ? undefined : marginLeft,
            ...child.props.style,
          },
          variant: child.props.variant || variant,
        })
      })}
      {extraAvatars ? (
        <AvatarGroupAvatar
          ownerState={ownerState}
          variant={variant}
          {...slotProps.additionalAvatar}
          className={clsx(
            classes.avatar,
            slotProps.additionalAvatar?.className,
          )}
          style={{ marginLeft, ...slotProps.additionalAvatar?.style }}
        >
          +{extraAvatars}
        </AvatarGroupAvatar>
      ) : null}
    </AvatarGroupRoot>
  )
}) as (props: AvatarGroupProps) => JSX.Element

export * from '@mui/material/AvatarGroup'
