import React from 'react'
import { useThemeProps } from '@mui/material'
import clsx from 'clsx'

import {
  Avatar,
  avatarClasses,
  ButtonBase,
  buttonBaseClasses,
} from '@monorail/components'
import {
  capitalize,
  composeClasses,
  excludeProps,
  styled,
} from '@monorail/utils'

import { getAvatarButtonUtilityClasses } from './avatarButtonClasses.js'
import type { AvatarButtonProps } from './avatarButtonProps.js'

interface AvatarButtonRootProps extends AvatarButtonProps {
  ownerState: AvatarButtonProps
}

const AvatarButtonRoot = styled(Avatar, {
  name: 'MonorailAvatarButton',
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
  backgroundColor: theme.palette[color].main,
  color: theme.palette[color].contrastText,
  transition: theme.transitions.create('background-color', {
    duration: theme.transitions.duration.shortest,
  }),
  '&:hover': {
    backgroundColor: theme.palette[color].hover,
  },
  '&:active': {
    backgroundColor: theme.palette[color].active,
  },
  [`&.${buttonBaseClasses.focusVisible}`]: {
    boxShadow: `inset 0 0 0 1px ${theme.palette[color].focusRing.inner}, 0 0 0 3px ${theme.palette[color].focusRing.outer}`,
  },
  [`& .${avatarClasses.img}`]: {
    transition: theme.transitions.create('filter', {
      duration: theme.transitions.duration.shortest,
    }),
    '&:hover': {
      filter: `brightness(90%)`,
    },
    '&:active': {
      filter: `brightness(75%)`,
    },
  },
}))

/**
 * An interactive Avatar that is also a semantic button element.
 */
export const AvatarButton = React.forwardRef((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'MonorailAvatarButton' })

  const {
    className,
    color = 'secondary',
    size = 'medium',
    disabled = false,
    ...other
  } = props

  const ownerState = {
    ...props,
    color,
    disabled,
    size,
  }

  const classes = useUtilityClasses(ownerState)

  return (
    <AvatarButtonRoot
      ref={ref}
      className={clsx(classes.root, className)}
      ownerState={ownerState}
      color={color}
      disabled={disabled}
      size={size}
      as={ButtonBase}
      {...other}
    >
      {props.children}
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
