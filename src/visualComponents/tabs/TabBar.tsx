import React, { Component, ReactNode } from 'react'
import styled, { css, SimpleInterpolation } from 'styled-components'

import {
  Colors,
  flexFlow,
  getColor,
  Sizes,
  zIndex,
  ZIndexNodeName,
} from '@monorail/helpers/exports'
import {
  HorizontalNavigationController,
  TabBarIndicatorProps,
} from '@monorail/metaComponents/horizontalNavigation/HorizontalNavigationController'

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
    flex-shrink: 0;
    &::after {
      background: ${getColor(Colors.Grey94)};
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      content: '';
      height: 1px;
    }

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
    ${zIndex(ZIndexNodeName.TabBarIndicator)};

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
        <HorizontalNavigationController
          actions={actions}
          tabBarIndicator={props => <TabBarIndicatorContainer {...props} />}
          activeTabIndex={activeTabIndex}
          getActiveTabIndex={getActiveTabIndex}
        >
          {children}
        </HorizontalNavigationController>
      </TabBarContainer>
    )
  }
}
// tslint:enable
