import React, {
  forwardRef,
  MouseEvent,
  Ref,
  StatelessComponent,
  Children,
  ReactNode,
} from 'react'
import styled, { css, SimpleInterpolation } from 'styled-components'
import { AppIcon } from '@monorail/appIcon/AppIcon'
import { CommonComponentType } from '@monorail/types'
import { Icon } from '@monorail/icon/Icon'
import {
  AppName,
  BorderRadius,
  borderRadius,
  Colors,
  getColor,
  ElevationRange,
  flexFlow,
  FontSizes,
  getElevation,
  typography,
} from '@monorail/helpers/exports'

const BBCardContent = styled.div<CommonComponentType>(
  ({ cssOverrides }) => css`
    ${flexFlow()};

    border-radius: inherit;
    height: 100%;
    overflow: hidden;
    width: 100%;
    position: relative; /* Needs pos:rel; so that it doesn't get placed under the shadow pseudo elements. */

    ${cssOverrides};
  `,
)

// building-blocks/cards/background
export type BBCardBackgroundProps = CommonComponentType & {
  hover?: boolean
  elevation?: ElevationRange
  onClick?: (event: MouseEvent) => void
  ref?: Ref<any> // tslint:disable-line:no-any
  cssCardContent?: SimpleInterpolation
  children?: ReactNode
}

export const BBCardBackground = styled(
  forwardRef<HTMLDivElement, BBCardBackgroundProps>(
    (
      {
        children,
        cssOverrides,
        hover,
        elevation,
        cssCardContent,
        ...otherProps
      },
      ref,
    ) => (
      <div ref={ref} {...otherProps}>
        <BBCardContent cssOverrides={cssCardContent}>{children}</BBCardContent>
      </div>
    ),
  ),
)<BBCardBackgroundProps>(
  ({ hover, cssOverrides, elevation = ElevationRange.Elevation6 }) => css`
    ${hover &&
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

    background: ${getColor(Colors.White)};
    position: relative; /* pos:re; because the shadow pseudo element is pos:abs; */
    z-index: 0; /* mythical z-index: 0. The shadow pseudo element needs a negative z-index, but then it disappears. Have to reset the z-index to the zero value so that it appears above the background of the page but under the background of the card. */

    ${cssOverrides};

    &::before {
      border-radius: inherit;
      background: ${getColor(Colors.White)};
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

      ${getElevation(elevation)};

      background: ${getColor(Colors.White)};
      bottom: 2px;
      content: '';
      left: 2px;
      position: absolute;
      right: 2px;
      top: 2px;
      z-index: -5;
    }
  `,
)

const BBCardHeaderContainer = styled.div<CommonComponentType>(
  ({ cssOverrides }) => css`
    ${flexFlow('row')};

    align-items: center;
    flex-shrink: 0;
    height: 32px;
    padding: 0 16px;
    position: relative; /* BBCardBottomBorder is pos:abs relative to this. */

    ${cssOverrides};
  `,
)

const BBCardHeaderTitle = styled.h1`
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

const BBCardBottomBorder = styled.div<BBCardBottomBorderProps>(
  ({ accentColor }) => css`
    background: linear-gradient(
      to right,
      ${getColor(Colors.White, 0)} 0,
      ${accentColor} 16px,
      ${accentColor} calc(100% - 16px),
      ${getColor(Colors.White, 0)} 100%
    );

    bottom: 0;
    height: 1px;
    left: 0;
    position: absolute;
    right: 0;
  `,
)

type BBCardHeaderProps = BBCardBottomBorderProps & {
  appIcon?: AppName
  cssOverrides?: SimpleInterpolation
  iconLeft?: string
  iconRight?: string
  noBorder?: boolean
  title: string
}

// building-blocks/cards/header
export const BBCardHeader: StatelessComponent<BBCardHeaderProps> = ({
  accentColor = getColor(Colors.BrandLightBlue),
  appIcon,
  children,
  cssOverrides,
  iconLeft,
  iconRight,
  noBorder,
  title,
}) => (
  <BBCardHeaderContainer cssOverrides={cssOverrides}>
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
  cssOverrides?: SimpleInterpolation
}

export const BBCardGrid = styled.div<BBCardGridProps>(
  ({ cssOverrides, cardWidth = 272 }) => css`
    display: grid;
    flex-grow: 1;
    grid-auto-rows: max-content;
    grid-template-columns: repeat(auto-fill, ${cardWidth}px);
    justify-content: center;
    padding: 20px 32px 14px;

    /* IE11 doesn't work with grid that auto places content. Here starts the hacks to get it working with flex. */
    display: -ms-flexbox; /* stylelint-disable-line */
    flex-flow: row wrap;
    align-content: flex-start;
    align-items: flex-start;

    ${cssOverrides};
  `,
)
