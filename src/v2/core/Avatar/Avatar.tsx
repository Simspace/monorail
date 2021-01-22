import React from 'react'
import * as MUI from '@material-ui/core'

import { BorderRadius, borderRadius } from '@monorail/helpers/exports'
import styled, { css, CSSProp } from '@monorail/helpers/styled-components'
import { IconButton } from '@monorail/v2/core/IconButton/IconButton'
import { OmitBannedProps, propBlockerConfig } from '@monorail/v2/shared/helpers'

const DEFAULT_SIZE = 24
const FONT_SCALE = 9.89 / DEFAULT_SIZE

export const getAvatarInitials = (fullName: string) => {
  const initials = fullName.match(/\b\w/g) || []

  return [initials.shift() || '', initials.pop() || '']
}

// Essentially an Enum
const DISPLAY = {
  Default: 'default',
  Team: 'team',
} as const

// Union of "Enum" values
type Display = typeof DISPLAY[keyof typeof DISPLAY]

const displayCss: Record<Display, CSSProp> = {
  [DISPLAY.Default]: css`
    ${borderRadius(BorderRadius.Round)};
    background: ${({ theme }) => theme.v2.ActionPrimary};
  `,
  [DISPLAY.Team]: css`
    ${borderRadius()};
    background: ${({ theme }) => theme.v2.Accent2};
  `,
}

export type AvatarProps = OmitBannedProps<Omit<MUI.AvatarProps, 'onClick'>> & {
  display?: Display
  size?: 16 | 24 | 32 | 40 | 48 | 56 | 64
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const StyledAvatar = styled(MUI.Avatar as typeof Avatar)
  .withConfig(
    propBlockerConfig<AvatarProps>(['display', 'size']),
  )
  // Provide defaults
  .attrs(props => ({
    size: props.size ?? DEFAULT_SIZE,
    display: props.display ?? DISPLAY.Default,

    // When `onClick` is passed in, use a button as its component (instead of a div)
    component: props.onClick ? IconButton : undefined,
  }))`
    font-weight: 900;
    text-transform: uppercase;
    font-size: ${({ size }) => size * FONT_SCALE}px;
    line-height: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
    width: ${({ size }) => size}px;
    ${({ display }) => displayCss[display]}
`

/**
 * - [Avatar | Material-UI](https://material-ui.com/components/avatars/#avatar)
 * - [Avatar | Monorail Figma](https://www.figma.com/file/dKL9YeHgWyxmRHuIjs38f3O9/Monorail-Components?node-id=953%3A7904)
 */
export function Avatar(props: AvatarProps) {
  return <StyledAvatar {...props} />
}
;(Avatar as any).muiName = (MUI.Avatar as any).muiName // eslint-disable-line
