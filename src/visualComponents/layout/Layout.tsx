import React, { forwardRef, MouseEvent, ReactNode, Ref } from 'react'
import styled, { css, SimpleInterpolation } from 'styled-components'

import {
  borderRadius,
  BorderRadius,
  Colors,
  ElevationRange,
  flexFlow,
  getColor,
  getElevationShadow,
  gothamFontFamily,
  zIndex,
  ZIndexNodeName,
} from '@monorail/helpers/exports'
import { CommonComponentType } from '@monorail/types'
import { ScrollAnimation } from '@monorail/visualComponents/layout/ScrollAnimation'

export const AppContainer = styled.div<CommonComponentType>`
  ${flexFlow()};

  flex: 1;
  overflow: hidden;

  &.catalog,
  &.events:not(.execution),
  &.reports-analytics {
    ${gothamFontFamily};
  }
`

export const PageContent = styled.div<CommonComponentType>`
  ${flexFlow()};

  flex: 1;
  overflow: hidden;
`

export const SectionContent = styled(ScrollAnimation)<CommonComponentType>(
  ({ cssOverrides }) => css`
    ${flexFlow()};

    border-radius: inherit;
    height: 100%;
    overflow: auto;
    width: 100%;
    position: relative; /* Needs pos:rel; so that it doesn't get placed under the shadow pseudo elements. */

    ${cssOverrides};
  `,
)

export type SectionProps = CommonComponentType & {
  hover?: boolean
  elevation?: ElevationRange
  onClick?: (event: MouseEvent) => void
  ref?: Ref<any> // tslint:disable-line:no-any
  cssCardContent?: SimpleInterpolation
  children?: ReactNode
  flat?: boolean
}

export const Section = styled(
  forwardRef<HTMLDivElement, SectionProps>(
    (
      {
        children,
        cssOverrides,
        hover,
        elevation,
        flat,
        cssCardContent,
        ...otherProps
      },
      ref,
    ) => (
      <div ref={ref} {...otherProps}>
        <SectionContent cssOverrides={cssCardContent}>
          {children}
        </SectionContent>
      </div>
    ),
  ),
)<SectionProps>(
  ({
    hover,
    cssOverrides,
    flat = false,
    elevation = ElevationRange.Section,
  }) => css`
    ${hover &&
      css`
        cursor: pointer;

        &:hover {
          &::after {
            transition: box-shadow ease 125ms;
            ${flat
              ? getElevationShadow(ElevationRange.Elevation0)
              : getElevationShadow(elevation)};
          }
        }
      `};

    ${flat &&
      css`
        border: 1px solid ${getColor(Colors.Black, 0.08)};
      `}

    ${flexFlow()};
    ${borderRadius(BorderRadius.Large)};
    ${zIndex(ZIndexNodeName.CardBody)};
    /* mythical z-index: 0. The shadow pseudo element needs a negative z-index, but then it disappears. Have to reset the z-index to the zero value so that it appears above the background of the page but under the background of the card. */

    background: ${getColor(Colors.White)};
    position: relative; /* pos:re; because the shadow pseudo element is pos:abs; */

    ${cssOverrides};

    &::before {
      ${zIndex(ZIndexNodeName.CardBackground)};

      border-radius: inherit;
      background: ${getColor(Colors.White)};
      bottom: 0;
      content: '';
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
    }

    &::after {
      ${borderRadius(BorderRadius.Medium)};
      ${flat
        ? getElevationShadow(ElevationRange.Elevation0)
        : getElevationShadow(elevation)};
      ${zIndex(ZIndexNodeName.CardShadow)};

      background: ${getColor(Colors.White)};
      bottom: 2px;
      content: '';
      left: 2px;
      position: absolute;
      right: 2px;
      top: 2px;
    }
  `,
)
