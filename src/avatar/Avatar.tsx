import React, { StatelessComponent } from 'react'
import styled, { css, SimpleInterpolation } from 'styled-components'
import { borderRadius, Colors, getColor } from '@monorail/helpers/exports'

type CCAvatarProps = {
  cssOverrides?: SimpleInterpolation
  team?: boolean
}

const size = 24

const CCAvatar = styled.div<CCAvatarProps>(
  ({ team, cssOverrides }) => css`
    ${team
      ? css`
          ${borderRadius()};

          background: ${getColor(Colors.BrandDarkBlue)};
        `
      : css`
          background: ${getColor(Colors.BrandLightBlue)};
          border-radius: ${size / 2}px;
        `};

    color: ${getColor(Colors.White)};
    flex-shrink: 0;
    font-size: 9.89px;
    font-weight: 900;
    height: ${size}px;
    line-height: ${size}px;
    text-align: center;
    text-transform: uppercase;
    user-select: none;
    width: ${size}px;

    ${cssOverrides};
  `,
)

type AvatarProps = CCAvatarProps & {
  first: string
  last: string
}

export const Avatar: StatelessComponent<AvatarProps> = ({
  cssOverrides,
  first,
  last,
  team,
  ...domProps
}) => (
  <CCAvatar cssOverrides={cssOverrides} team={team} {...domProps}>
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
