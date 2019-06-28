import React, { FC, MouseEventHandler, ReactType } from 'react'

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
import { BaseLink } from '@monorail/hyperLink/BaseLink'
import { FramedIcon } from '@monorail/icon/FramedIcon'
import { LinkProps } from '@monorail/types'

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
}>(
  ({ to }) => css`
    ${borderRadius(BorderRadius.Large)};
    ${flexFlow('column')};

    background: ${getColor(Colors.White)};
    border: 1px solid ${getColor(Colors.Black24)};
    height: 184px;
    width: 184px;
    user-select: none;

    ${to &&
      css`
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
      `}
  `,
)

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
  isArchived?: boolean
}

type Props = TileProps & {
  to: LinkProps['to']
  as?: ReactType
  onClick?: MouseEventHandler
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
  isArchived,
  ...domProps
}) => (
  <TileContainer as={BaseLink} to={to} {...domProps}>
    <TileBody>
      <FramedIcon
        frameColor={frameColor}
        icon={icon}
        size={64}
        isArchived={isArchived}
      />
    </TileBody>
    <TileTitleContainer>
      <FramedIcon
        frameColor={frameColor}
        icon={icon}
        size={16}
        css={css`
          margin-right: 16px;
        `}
        isArchived={isArchived}
      />
      <TileTitle>{name}</TileTitle>
    </TileTitleContainer>
  </TileContainer>
)
