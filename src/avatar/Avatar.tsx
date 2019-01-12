import React, { StatelessComponent } from 'react'
import styled, { css, SimpleInterpolation } from 'styled-components'

import { borderRadius, Colors, colors } from 'CommonStyles'

type CCAvatarProps = {
  css?: SimpleInterpolation
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

  ${({ css: cssOverrides }) => cssOverrides};
`
type AvatarProps = CCAvatarProps & {
  first: string
  last: string
}

export const Avatar: StatelessComponent<AvatarProps> = ({
  css: cssOverrides,
  first,
  last,
  team,
}) => (
  <CCAvatar css={cssOverrides} team={team}>
    {first.charAt(0)}
    {last.charAt(0)}
  </CCAvatar>
)
