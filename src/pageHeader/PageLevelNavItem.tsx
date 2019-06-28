import React from 'react'
import { Link } from 'react-router'
import styled, { css } from 'styled-components'

import {
  Colors,
  flexFlow,
  FontSizes,
  getColor,
  typography,
  zIndex,
  ZIndexNodeName,
} from '@monorail/helpers/exports'
import { TabBarIndicatorProps } from '@monorail/tabs/TabBarController'
import { CommonComponentType, LinkProps } from '@monorail/types'

const tabBarIndicatorSideWidth = 21
const tabBarIndicatorBodyWidth = 52

const PageLevelIndicatorContainer = styled(props => (
  // tslint:disable-next-line: no-unsafe-any
  <div {...props}>
    <TabBarIndicatorLeft
      width="21"
      height="31"
      viewBox="0 0 21 31"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M15.3085 3.62473L4.26866 27.2815C4.08422 27.6767 3.992 27.8743 3.88878 28.0475C3.24043 29.1356 2.11503 29.8523 0.854831 29.9797C0.6542 30 0.436134 30 0 30V31H21V0C20.8277 0 20.7416 0 20.662 0.0021127C18.4463 0.0609255 16.4436 1.3364 15.4533 3.31931C15.4178 3.39053 15.3813 3.46858 15.3085 3.62466L15.3085 3.62473Z" />
    </TabBarIndicatorLeft>
    <TabBarIndicatorBody />
    <TabBarIndicatorRight
      height="31"
      viewBox="0 0 21 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.69154 3.62473L16.7313 27.2815C16.9158 27.6767 17.008 27.8743 17.1112 28.0475C17.7596 29.1356 18.885 29.8523 20.1452 29.9797C20.3458 30 20.5639 30 21 30V31H0V0C0.172295 0 0.258442 0 0.338032 0.0021127C2.55367 0.0609255 4.55642 1.3364 5.54668 3.31931C5.58224 3.39053 5.61867 3.46858 5.69151 3.62466L5.69154 3.62473Z"
        fill="#fff"
      />
    </TabBarIndicatorRight>
  </div>
))<TabBarIndicatorProps>`
  ${flexFlow('row')};

  bottom: -1px;
  height: 31px;
  left: 0;
  position: absolute;
  right: 0;
  z-index: -5;
`

const TabBarIndicatorLeft = styled.svg`
  fill: ${getColor(Colors.White)};
  height: 100%;
  width: ${tabBarIndicatorSideWidth + 1}px;
  position: absolute;
  left: 0;
`

const TabBarIndicatorRight = styled.svg`
  fill: ${getColor(Colors.White)};
  height: 100%;
  position: absolute;
  right: 0;
  width: ${tabBarIndicatorSideWidth + 1}px;
`

const TabBarIndicatorBody = styled.div`
  background: ${getColor(Colors.White)};
  height: 100%;
  width: calc(100% - ${tabBarIndicatorSideWidth * 2}px);
  left: ${tabBarIndicatorSideWidth}px;
  position: absolute;
`

// tslint:disable-next-line: no-unsafe-any
export const PageLevelNavItem = styled(({ children, ...otherProps }) => (
  // tslint:disable-next-line: no-unsafe-any
  <Link {...otherProps}>
    {/* tslint:disable-next-line: no-unsafe-any */}
    {children}
    <PageLevelIndicatorContainer />
  </Link>
)).attrs({
  activeClassName: 'is-active',
})<Props>(
  // tslint:disable-next-line: no-unsafe-any
  ({ cssOverrides }) => css`
    ${flexFlow('row')};
    ${typography(700, FontSizes.Title5)};
    ${zIndex(ZIndexNodeName.PageLevelNavItem)};

    align-items: center;
    color: ${getColor(Colors.White)};
    cursor: pointer;
    min-height: 24px;
    padding: 0 20px;
    position: relative;
    user-select: none;

    &:hover,
    &:focus {
      text-decoration: none;
    }

    ${PageLevelIndicatorContainer} {
      opacity: 0.1;
    }

    &:hover ${PageLevelIndicatorContainer} {
      opacity: 0.2;
    }

    &:active ${PageLevelIndicatorContainer} {
      opacity: 0.3;
    }

    &.is-active {
      color: ${getColor(Colors.BrandDarkBlue)};

      ${PageLevelIndicatorContainer} {
        opacity: 1;
      }
    }

    &:last-of-type {
      margin-right: -36px;
    }

    ${cssOverrides as string};
  `,
)

export type Props = CommonComponentType &
  LinkProps & {
    onClick?: (event: unknown) => void
  }
