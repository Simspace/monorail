import React, { Component, ReactNode } from 'react'
import { isNil } from '@monorail/sharedHelpers/typeGuards'
import styled, { css, SimpleInterpolation } from 'styled-components'
import { Colors, getColor, flexFlow, Sizes } from '@monorail/helpers/exports'
import { TabProps } from './Tab'

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

const TabBarActions = styled.div`
  ${flexFlow('row')};

  align-items: center;
  margin-left: auto;
  margin-right: 8px;
`

type CCTabBarProps = {
  cssOverrides?: SimpleInterpolation
  size: Sizes
  activeTabIndex?: number
}

type TabBarIndicatorProps = {
  left: number
  width: number
  duration: number
}

type TabBarProps = CCTabBarProps & {
  getActiveTabIndex?: (activeTabIndex: number) => void
  actions?: ReactNode
}

type TabBarState = {
  activeTabIndex: number
  indicatorLeft: number
  indicatorTransitionDuration: number
  indicatorWidth: number
}

export class TabBar extends Component<TabBarProps, TabBarState> {
  static defaultProps = {
    size: Sizes.DP24,
  }

  state: TabBarState = {
    activeTabIndex: this.props.activeTabIndex || 0,
    indicatorLeft: 0,
    indicatorTransitionDuration: 0,
    indicatorWidth: 0,
  }

  componentDidUpdate(prevProps: TabBarProps, prevState: TabBarState) {
    // Check if the indicator needs to move, if it does set the distance of the move as the transition duration.
    if (prevState.indicatorLeft !== this.state.indicatorLeft) {
      this.setState(() => ({
        indicatorTransitionDuration: Math.abs(
          prevState.indicatorLeft - this.state.indicatorLeft,
        ),
      }))
    }

    // Check if the activeTabIndex needs to change
    if (prevProps.activeTabIndex !== this.props.activeTabIndex) {
      this.setState(() => ({
        activeTabIndex: this.props.activeTabIndex || 0,
      }))
    }
  }

  setIndicator = (width: number, left: number) =>
    this.setState(() => ({
      indicatorWidth: width,
      indicatorLeft: left,
    }))

  updateActiveTab = (index: number) => {
    const { getActiveTabIndex } = this.props

    this.setState(() => ({ activeTabIndex: index }))
    getActiveTabIndex && getActiveTabIndex(index)
  }

  renderTabs() {
    const { children } = this.props
    const { activeTabIndex } = this.state

    /**
     * If we're controlling the activeTabIndex with a prop,
     * then we set updateIsActive to undefined to prevent
     * automatic updates on Tab click.
     */

    return React.Children.map(
      children,
      (child, index: number) =>
        !isNil(child) &&
        React.isValidElement<TabProps>(child) &&
        React.cloneElement(child, {
          index,
          isActive: index === activeTabIndex,
          setIndicator: this.setIndicator,
          updateIsActive: isNil(this.props.activeTabIndex)
            ? this.updateActiveTab
            : undefined,
        }),
    )
  }

  render() {
    const { cssOverrides, size, actions } = this.props
    const {
      indicatorLeft,
      indicatorWidth,
      indicatorTransitionDuration,
    } = this.state

    return (
      <TabBarContainer cssOverrides={cssOverrides} size={size}>
        {this.renderTabs()}

        {!isNil(actions) && (
          <TabBarActions id="tabBarActions">{actions}</TabBarActions>
        )}
        <TabBarIndicatorContainer
          width={indicatorWidth}
          left={indicatorLeft}
          duration={indicatorTransitionDuration}
        />
      </TabBarContainer>
    )
  }
}
// tslint:enable
