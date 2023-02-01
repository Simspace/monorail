import React from 'react'
import type {
  AvatarClasses,
  AvatarTypeMap as MuiAvatarTypeMap,
} from '@mui/material'
import {
  Avatar as MuiAvatar,
  avatarClasses as muiAvatarClasses,
  generateUtilityClasses,
} from '@mui/material'
import clsx from 'clsx'

import type { OverridableComponent } from '@monorail/types'

declare module '@mui/material/Avatar/avatarClasses' {
  interface AvatarClasses {
    sizeSmall: string
  }
}

export const avatarClasses: AvatarClasses = {
  ...muiAvatarClasses,
  ...generateUtilityClasses('MuiAvatar', ['sizeSmall']),
}

export interface AvatarExtraProps {
  size?: 'small' | 'medium'
}

export interface AvatarTypeMap<P = {}, D extends React.ElementType = 'div'>
  extends MuiAvatarTypeMap<P & AvatarExtraProps, D> {}

/**
 *
 * Demos:
 *
 * - [Avatar](https://simspace.gitlab.io/engineering/ux-engineering/monorail/main/storybook/?path=/docs/data-display-avatar--default)
 * - [Avatars (MUI)](https://mui.com/material-ui/react-avatar/)
 *
 * API:
 *
 * - [Avatar API](https://mui.com/material-ui/api/avatar/)
 */
export const Avatar = React.forwardRef((inProps, ref) => {
  const { size, className, ...props } = inProps

  const sizeClassName = size === 'small' ? avatarClasses.sizeSmall : ''

  return (
    <MuiAvatar
      className={clsx(className, sizeClassName)}
      ref={ref}
      {...props}
    />
  )
}) as OverridableComponent<AvatarTypeMap>

// @ts-expect-error
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
Avatar.muiName = MuiAvatar.muiName

export * from '@mui/material/Avatar'
