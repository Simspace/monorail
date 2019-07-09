import React, { Component, ReactNode } from 'react'
import { SimpleInterpolation } from 'styled-components'

import { Colors, flexFlow, getColor, Sizes } from '@monorail/helpers/exports'
import styled, { css } from '@monorail/helpers/styled-components'
import { getThemeColor, ThemeColors } from '@monorail/helpers/theme'
import {
  HorizontalNavigationController,
  TabBarIndicatorProps,
} from '@monorail/metaComponents/horizontalNavigation/HorizontalNavigationController'

// TODO(unsafe-any): Fix unsafe anys
// tslint:disable no-unsafe-any

// TabBarIndicator is pos:abs to this element. Also we use offsetLeft on the Tab which references this position.
const PageLevelNavBarContainer = styled.div<PageLevelNavContainerProps>(
  ({ cssOverrides }) => css`
    ${flexFlow('row')};

    background: ${getThemeColor(ThemeColors.ApplicationPrimary)};
    box-sizing: border-box;
    flex-shrink: 0;
    height: 32px;
    padding: 0 16px;
    position: relative;
    margin-left: 0;
    margin-right: auto;

    ${cssOverrides};
  `,
)

const tabBarIndicatorSideWidth = 21
const tabBarIndicatorBodyWidth = 52

const TabBarIndicatorContainer = styled(
  ({ left, width, duration, ...otherProps }) => (
    <div {...otherProps}>
      <TabBarIndicatorLeft
        width="21"
        height="31"
        viewBox="0 0 21 31"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M15.3085 3.62473L4.26866 27.2815C4.08422 27.6767 3.992 27.8743 3.88878 28.0475C3.24043 29.1356 2.11503 29.8523 0.854831 29.9797C0.6542 30 0.436134 30 0 30V31H21V0C20.8277 0 20.7416 0 20.662 0.0021127C18.4463 0.0609255 16.4436 1.3364 15.4533 3.31931C15.4178 3.39053 15.3813 3.46858 15.3085 3.62466L15.3085 3.62473Z" />
      </TabBarIndicatorLeft>
      <TabBarIndicatorBody duration={duration} width={width} />
      <TabBarIndicatorRight
        duration={duration}
        width={width}
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
  ),
)<TabBarIndicatorProps>(
  ({ left, duration }) => css`
    ${flexFlow('row')};
    bottom: 0;
    height: 31px;
    left: 0;
    position: absolute;
    transition-duration: ${duration}ms;
    transition-property: all;
    transition-timing-function: ease-in-out;
    transform-origin: bottom left;

    transform: translateX(${left}px) translateY(1px);
  `,
)

const TabBarIndicatorLeft = styled.svg`
  fill: ${getColor(Colors.White)};
  height: 100%;
  width: ${tabBarIndicatorSideWidth + 1}px;
  position: absolute;
  left: 0;
`

const TabBarIndicatorRight = styled(({ duration, width, ...otherProps }) => (
  <svg {...otherProps} />
))<{ duration: number; width: number }>(
  ({ duration, width }) => css`
    fill: ${getColor(Colors.White)};
    height: 100%;
    width: ${tabBarIndicatorSideWidth + 1}px;
    transition-duration: ${duration}ms;
    transition-property: all;
    transition-timing-function: ease-in-out;
    transform-origin: bottom left;

    transform: translateX(
      ${width - tabBarIndicatorBodyWidth - tabBarIndicatorSideWidth - 1}px
    );
  `,
)

const TabBarIndicatorBody = styled(({ duration, width, ...otherProps }) => (
  <div {...otherProps} />
))<{ duration: number; width: number }>(
  ({ duration, width }) => css`
    background: ${getColor(Colors.White)};
    height: 100%;
    width: ${tabBarIndicatorBodyWidth}px;
    transition-duration: ${duration}ms;
    transition-property: all;
    transition-timing-function: ease-in-out;
    transform-origin: bottom left;

    transform: translateX(${tabBarIndicatorSideWidth}px)
      scaleX(
        ${(width - tabBarIndicatorSideWidth * 2) / tabBarIndicatorBodyWidth}
      );
  `,
)

const BookEnd = styled.svg`
  fill: ${getThemeColor(ThemeColors.ApplicationPrimary)};
  position: absolute;
  top: 0;
  right: -21px;
`

type PageLevelNavContainerProps = {
  cssOverrides?: SimpleInterpolation
  activeTabIndex?: number
}

type Props = PageLevelNavContainerProps & {
  getActiveTabIndex?: (activeTabIndex: number) => void
  actions?: ReactNode
}

export class PageLevelNavBar extends Component<Props> {
  static defaultProps = {
    size: Sizes.DP24,
  }

  render() {
    const {
      cssOverrides,
      actions,
      children,
      activeTabIndex,
      getActiveTabIndex,
      ...domProps
    } = this.props

    return (
      <div
        css={css`
          ${flexFlow('row')};
          padding-right: 32px;
        `}
      >
        <PageLevelNavBarContainer cssOverrides={cssOverrides} {...domProps}>
          <BookEnd
            height="31"
            viewBox="0 0 21 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5.69154 3.62473L16.7313 27.2815C16.9158 27.6767 17.008 27.8743 17.1112 28.0475C17.7596 29.1356 18.885 29.8523 20.1452 29.9797C20.3458 30 20.5639 30 21 30V31H0V0C0.172295 0 0.258442 0 0.338032 0.0021127C2.55367 0.0609255 4.55642 1.3364 5.54668 3.31931C5.58224 3.39053 5.61867 3.46858 5.69151 3.62466L5.69154 3.62473Z" />
          </BookEnd>
          <HorizontalNavigationController
            tabBarIndicator={props => null}
            activeTabIndex={activeTabIndex}
            getActiveTabIndex={getActiveTabIndex}
          >
            {children}
          </HorizontalNavigationController>
        </PageLevelNavBarContainer>
        {actions}
      </div>
    )
  }
}
// tslint:enable
