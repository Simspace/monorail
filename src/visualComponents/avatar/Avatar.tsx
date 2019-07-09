import React, { StatelessComponent } from 'react'
import styled, { css, SimpleInterpolation } from 'styled-components'

import { borderRadius, Colors, getColor } from '@monorail/helpers/exports'
import { Sizes } from '@monorail/helpers/size'
import { isNil } from '@monorail/sharedHelpers/typeGuards'
import { Icon } from '@monorail/visualComponents/icon/Icon'

type CCAvatarProps = {
  cssOverrides?: SimpleInterpolation
  team?: boolean
  size?: Sizes
}

const defaultSize = 24
const fontScale = 9.89 / defaultSize
const iconScale = 10 / 16

const CCAvatar = styled.div<CCAvatarProps>(
  ({ team, cssOverrides, size = defaultSize }) => css`
    ${team
      ? css`
          ${borderRadius()};

          background: ${getColor(Colors.BrandDarkBlue)};
        `
      : css`
          background: ${getColor(Colors.BrandLightBlue)};
          border-radius: ${size / 2}px;
        `};

    align-items: center;
    color: ${getColor(Colors.White)};
    display: flex;
    flex-shrink: 0;
    font-size: ${size * fontScale}px;
    font-weight: 900;
    height: ${size}px;
    justify-content: center;
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
  icon?: string
}

export const Avatar: StatelessComponent<AvatarProps> = ({
  cssOverrides,
  first,
  last,
  team,
  size,
  icon,
  ...domProps
}) => (
  <CCAvatar cssOverrides={cssOverrides} team={team} size={size} {...domProps}>
    {!isNil(icon) ? (
      <Icon
        icon={icon}
        size={size ? iconScale * size : iconScale * defaultSize}
        css={css`
          color: ${getColor(Colors.White)};
        `}
      />
    ) : (
      <>
        {first.charAt(0)}
        {last.charAt(0)}
      </>
    )}
  </CCAvatar>
)

export const getAvatarInitials = (fullName: string) => {
  const initials = fullName.match(/\b\w/g) || []

  return {
    first: initials.shift() || '',
    last: initials.pop() || '',
  }
}
