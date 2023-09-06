import React from 'react'
import type { SxProps } from '@mui/material'
import { useThemeProps } from '@mui/material'
import clsx from 'clsx'

import type { AvatarProps, ButtonBaseProps } from '@monorail/components'
import { Avatar, avatarClasses, ButtonBase } from '@monorail/components'
import {
  capitalize,
  composeClasses,
  excludeProps,
  styled,
} from '@monorail/utils'

import { getAvatarButtonUtilityClasses } from './avatarButtonClasses.js'

export interface AvatarButtonProps
  extends Omit<ButtonBaseProps, 'color' | 'size'> {
  /**
   * The content of the Avatar
   */
  children?: React.ReactNode
  color?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning'
  size?: 'small' | 'medium'
  slotProps?: {
    root?: ButtonBaseProps
    avatar?: AvatarProps
  }
  sx?: SxProps
}

interface AvatarButtonRootProps extends AvatarButtonProps {
  ownerState: AvatarButtonProps
}

const AvatarButtonRoot = styled(ButtonBase, {
  name: 'ThirdrailAvatarButton',
  slot: 'Root',
  shouldForwardProp: excludeProps('color'),
  overridesResolver: (props: AvatarButtonRootProps, styles) => {
    const {
      ownerState: { color },
    } = props
    return [
      styles.root,
      color !== undefined && styles[`color${capitalize(color)}`],
    ]
  },
})<AvatarButtonRootProps>(({ color = 'secondary', theme }) => ({
  [`& .${avatarClasses.root}`]: {
    backgroundColor: theme.palette[color].main,
    transition: theme.transitions.create('background-color', {
      duration: theme.transitions.duration.shortest,
    }),
    '&:hover': {
      backgroundColor: theme.palette[color].hover,
    },
    '&:active': {
      backgroundColor: theme.palette[color].active,
    },
  },
}))

export const AvatarButton = React.forwardRef((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'AvatarButton' })

  const {
    className,
    color = 'secondary',
    size = 'small',
    slotProps = {},
    ...other
  } = props

  const ownerState = {
    ...props,
    color,
    size,
  }

  const classes = useUtilityClasses(ownerState)

  return (
    <AvatarButtonRoot
      ref={ref}
      className={clsx(classes.root, className)}
      ownerState={ownerState}
      color={color}
      {...other}
    >
      <Avatar size={size} {...slotProps?.avatar}>
        {props.children}
      </Avatar>
    </AvatarButtonRoot>
  )
}) as (props: AvatarButtonProps) => JSX.Element

function useUtilityClasses(ownerState: AvatarButtonProps) {
  const { classes, color } = ownerState

  const slots = {
    root: ['root', color !== undefined && `color${capitalize(color)}`],
  }

  return composeClasses(slots, getAvatarButtonUtilityClasses, classes)
}
