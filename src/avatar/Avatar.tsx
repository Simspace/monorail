import React, { StatelessComponent } from 'react'
import styled, { css, SimpleInterpolation } from 'styled-components'

import { borderRadius, Colors, colors } from '@monorail/CommonStyles'

type CCAvatarProps = {
  cssOverrides?: SimpleInterpolation
  team?: boolean
}

const size = 24

const CCAvatar = styled<CCAvatarProps, 'div'>('div')`
  ${({ team }) =>
    team
      ? css`
          ${borderRadius()};

          background: ${colors(Colors.BrandDarkBlue)};
        `
      : css`
          background: ${colors(Colors.BrandLightBlue)};
          border-radius: ${size / 2}px;
        `};

  color: ${colors(Colors.White)};
  flex-shrink: 0;
  font-size: 9.89px;
  font-weight: 900;
  height: ${size}px;
  line-height: ${size}px;
  text-align: center;
  text-transform: uppercase;
  user-select: none;
  width: ${size}px;

  ${({ cssOverrides }) => cssOverrides};
`
type AvatarProps = CCAvatarProps & {
  first: string
  last: string
}

export const Avatar: StatelessComponent<AvatarProps> = ({
  cssOverrides,
  first,
  last,
  team,
  ...otherProps
}) => (
  <CCAvatar cssOverrides={cssOverrides} team={team} {...otherProps}>
    {first.charAt(0)}
    {last.charAt(0)}
  </CCAvatar>
)

export const getAvatarInitials = (fullName: string) => {
  const initials = fullName.match(/\b\w/g) || []

  return {
    first: initials.shift() || '',
    last: initials.pop() || '',
  }
}
