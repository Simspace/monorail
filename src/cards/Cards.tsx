import React, { forwardRef, MouseEvent, StatelessComponent, Ref } from 'react'
import { AppIcon } from '@monorail/appIcon/AppIcon'
import { Icon } from '@monorail/icon/Icon'
import {
  AppName,
  BorderRadius,
  borderRadius,
  Colors,
  colors,
  ElevationRange,
  flexFlow,
  FontSizes,
  getElevation,
  typography,
} from '@monorail/CommonStyles'
import styled, { css, SimpleInterpolation } from 'styled-components'
import { CommonComponentType } from '@monorail/types'

const BBCardContent = styled<CommonComponentType, 'div'>('div')`
  ${flexFlow()};

  border-radius: inherit;
  height: 100%;
  overflow: hidden;
  width: 100%;
  position: relative; /* Needs pos:rel; so that it doesn't get placed under the shadow pseudo elements. */

  ${({ css: cssOverrides }) => cssOverrides};
`

// building-blocks/cards/background
export type BBCardBackgroundProps = CommonComponentType & {
  hover?: boolean
  elevation?: ElevationRange
  onClick?: (event: MouseEvent) => void
  ref?: Ref<any> // tslint:disable-line:no-any
  cssCardContent?: SimpleInterpolation
}

export const BBCardBackground = styled<BBCardBackgroundProps>(
  forwardRef(
    (
      {
        children,
        css: cssOverrides,
        hover,
        elevation,
        cssCardContent,
        ...otherProps
      },
      ref,
    ) => (
      <div ref={ref} {...otherProps}>
        <BBCardContent css={cssCardContent}>{children}</BBCardContent>
      </div>
    ),
  ),
)`
  ${({ hover }) =>
    hover &&
    css`
      cursor: pointer;

      &:hover {
        &::after {
          transition: box-shadow ease 125ms;
          ${getElevation(ElevationRange.Elevation10)};
        }
      }
    `};

  ${flexFlow()};
  ${borderRadius(BorderRadius.Large)};

  background: ${colors(Colors.White)};
  position: relative; /* pos:re; because the shadow pseudo element is pos:abs; */
  z-index: 0; /* mythical z-index: 0. The shadow pseudo element needs a negative z-index, but then it disappears. Have to reset the z-index to the zero value so that it appears above the background of the page but under the background of the card. */

  ${({ css: cssOverrides }) => cssOverrides};

  &::before {
    border-radius: inherit;
    background: ${colors(Colors.White)};
    bottom: 0;
    content: '';
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 0;
  }

  &::after {
    ${borderRadius(BorderRadius.Medium)};

    ${({ elevation = ElevationRange.Elevation6 }) => getElevation(elevation)};

    background: ${colors(Colors.White)};
    bottom: 2px;
    content: '';
    left: 2px;
    position: absolute;
    right: 2px;
    top: 2px;
    z-index: -5;
  }
`

const BBCardHeaderContainer = styled<{ css: SimpleInterpolation }, 'div'>(
  'div',
)`
  ${flexFlow('row')};
  align-items: center;
  flex-shrink: 0;
  height: 32px;
  padding: 0 16px;
  position: relative; /* BBCardBottomBorder is pos:abs relative to this. */

  ${({ css: cssOverrides }) => cssOverrides};
`

const BBCardHeaderTitle = styled('h1')`
  ${typography(700, FontSizes.Title5)};
  margin: 0;
`

const StyledAppIconLeft = styled(AppIcon)`
  margin-right: 16px;
`

const StyledIconLeft = styled(Icon)`
  margin-right: 16px;
`

const StyledIconRight = styled(Icon)`
  margin-left: 16px;
`

type BBCardBottomBorderProps = {
  accentColor?: string
}

const BBCardBottomBorder = styled<BBCardBottomBorderProps, 'div'>('div')`
  ${({ accentColor }) => css`
    background: linear-gradient(
      to right,
      ${colors(Colors.White, 0)} 0,
      ${accentColor} 16px,
      ${accentColor} calc(100% - 16px),
      ${colors(Colors.White, 0)} 100%
    );
  `};

  bottom: 0;
  height: 1px;
  left: 0;
  position: absolute;
  right: 0;
`

type BBCardHeaderProps = BBCardBottomBorderProps & {
  appIcon?: AppName
  css?: SimpleInterpolation
  iconLeft?: string
  iconRight?: string
  noBorder?: boolean
  title: string
}

// building-blocks/cards/header
export const BBCardHeader: StatelessComponent<BBCardHeaderProps> = ({
  accentColor = colors(Colors.BrandLightBlue),
  appIcon,
  children,
  css: cssOverrides,
  iconLeft,
  iconRight,
  noBorder,
  title,
}) => (
  <BBCardHeaderContainer css={cssOverrides}>
    {appIcon && <StyledAppIconLeft appName={appIcon} />}
    {iconLeft && <StyledIconLeft icon={iconLeft} />}
    <BBCardHeaderTitle>{title}</BBCardHeaderTitle>
    {iconRight && <StyledIconRight icon={iconRight} />}
    {children}
    {!noBorder && <BBCardBottomBorder accentColor={accentColor} />}
  </BBCardHeaderContainer>
)

// building-blocks/cards/card-grid
type BBCardGridProps = {
  cardWidth?: number
  css?: SimpleInterpolation
}

export const BBCardGrid = styled<BBCardGridProps, 'div'>('div')`
  display: grid;
  flex-grow: 1;
  grid-auto-rows: max-content;
  grid-template-columns: repeat(
    auto-fill,
    ${({ cardWidth = 272 }) => cardWidth}px
  );
  justify-content: center;
  padding: 20px 32px 14px;

  /* IE11 doesn't work with grid that auto places content. Here starts the hacks to get it working with flex. */
  display: -ms-flexbox; /* stylelint-disable-line */
  flex-flow: row wrap;
  align-content: flex-start;

  ${({ css: cssOverrides }) => cssOverrides};
`
