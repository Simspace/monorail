import React, { FC } from 'react'
import { Link } from 'react-router'

import {
  BorderRadius,
  borderRadius,
  Colors,
  flexFlow,
  FontSizes,
  getColor,
  typography,
} from '@monorail/helpers/exports'
import styled, { css } from '@monorail/helpers/styled-components'
import { getThemeColor, ThemeColors } from '@monorail/helpers/theme'
import { FramedIcon } from '@monorail/icon/FramedIcon'
import { CommonComponentType, LinkProps } from '@monorail/types'

/*
 * Styles
 */

const TileTitleContainer = styled.div`
  ${flexFlow('row')};

  align-items: center;
  padding: 16px;
`

const TileTitle = styled.div`
  ${typography(500, FontSizes.Title5)};

  color: ${getThemeColor(ThemeColors.Text900)};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

// eslint-disable-next-line no-unexpected-multiline
const TileContainer = styled.div<{
  to: LinkProps['to']
}>`
  ${borderRadius(BorderRadius.Large)};
  ${flexFlow('column')};

  background: ${getColor(Colors.White)};
  border: 1px solid ${getColor(Colors.Black24)};
  height: 184px;
  width: 184px;

  &:hover {
    ${TileTitleContainer} {
      background: ${getColor(Colors.BrandLightBlue, 0.1)};
    }

    ${TileTitle} {
      color: ${getColor(Colors.BrandLightBlue)};
    }
  }

  &.is-active,
  &:active {
    ${TileTitleContainer} {
      background: ${getColor(Colors.BrandLightBlue, 0.2)};
    }

    ${TileTitle} {
      color: ${getColor(Colors.BrandLightBlue)};
    }
  }
`

const TileBody = styled.div`
  ${flexFlow('column')};

  align-items: center;
  height: 136px;
  justify-content: center;
`

/*
 * Types
 */

type TileProps = {
  icon: string
  image?: string
  name: string
  frameColor: Colors
}

type Props = CommonComponentType &
  TileProps & {
    to: LinkProps['to']
  }

/*
 * Component
 */

export const Tile: FC<Props> = ({
  name,
  icon,
  image,
  frameColor,
  to,
  ...domProps
}) => (
  <TileContainer as={Link} to={to} {...domProps}>
    <TileBody>
      <FramedIcon frameColor={frameColor} icon={icon} size={64} />
    </TileBody>
    <TileTitleContainer>
      <FramedIcon
        frameColor={frameColor}
        icon={icon}
        size={16}
        css={css`
          margin-right: 16px;
        `}
      />
      <TileTitle>{name}</TileTitle>
    </TileTitleContainer>
  </TileContainer>
)
