import React, { Component, ReactNode } from 'react'
import styled, { css, SimpleInterpolation } from 'styled-components'

import { Colors, flexFlow, getColor, Sizes } from '@monorail/helpers/exports'
import {
  TabBarController,
  TabBarIndicatorProps,
} from '@monorail/tabs/TabBarController'

// TODO(unsafe-any): Fix unsafe anys
// tslint:disable no-unsafe-any

// TabBarIndicator is pos:abs to this element. Also we use offsetLeft on the Tab which references this position.
export const TabBarContainer = styled.div<CCTabBarProps>(
  ({ cssOverrides, size }) => css`
    ${flexFlow('row')};

    height: ${size}px;
    padding: 0 8px;
    position: relative;
    box-sizing: border-box;
    border-bottom: 1px solid ${getColor(Colors.Grey94)};
    flex-shrink: 0;

    ${cssOverrides};
  `,
)

const tabBarIndicatorSideWidth = 3
const tabBarIndicatorBodyWidth = 10

const TabBarIndicatorContainer = styled(
  ({ left, width, duration, ...otherProps }) => (
    <div {...otherProps}>
      <TabBarIndicatorLeft />
      <TabBarIndicatorBody duration={duration} width={width} />
      <TabBarIndicatorRight duration={duration} width={width} />
    </div>
  ),
)<TabBarIndicatorProps>(
  ({ left, duration }) => css`
    ${flexFlow('row')};
    bottom: 0;
    height: 3px;
    left: 0;
    position: absolute;
    transition-duration: ${duration}ms;
    transition-property: all;
    transition-timing-function: ease-in-out;
    transform-origin: bottom left;

    transform: translateX(${left}px);
  `,
)

const TabBarIndicatorLeft = styled.div`
  background: ${getColor(Colors.BrandLightBlue)};
  border-radius: 3px 0 0 0;
  height: 100%;
  width: ${tabBarIndicatorSideWidth + 1}px;
  position: absolute;
  left: 0;
`

const TabBarIndicatorRight = styled(({ duration, width, ...otherProps }) => (
  <div {...otherProps} />
))<{ duration: number; width: number }>(
  ({ duration, width }) => css`
    background: ${getColor(Colors.BrandLightBlue)};
    border-radius: 0 3px 0 0;
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
    background: ${getColor(Colors.BrandLightBlue)};
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

type CCTabBarProps = {
  cssOverrides?: SimpleInterpolation
  size: Sizes
  activeTabIndex?: number
}

type TabBarProps = CCTabBarProps & {
  getActiveTabIndex?: (activeTabIndex: number) => void
  actions?: ReactNode
}

export class TabBar extends Component<TabBarProps> {
  static defaultProps = {
    size: Sizes.DP24,
  }

  render() {
    const {
      cssOverrides,
      size,
      actions,
      children,
      activeTabIndex,
      getActiveTabIndex,
      ...domProps
    } = this.props

    return (
      <TabBarContainer cssOverrides={cssOverrides} size={size} {...domProps}>
        <TabBarController
          actions={actions}
          tabBarIndicator={props => <TabBarIndicatorContainer {...props} />}
          activeTabIndex={activeTabIndex}
          getActiveTabIndex={getActiveTabIndex}
        >
          {children}
        </TabBarController>
      </TabBarContainer>
    )
  }
}
// tslint:enable
