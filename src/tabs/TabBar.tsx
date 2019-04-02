import React, { Component, ReactNode } from 'react'
import { isNil } from '@monorail/sharedHelpers/typeGuards'
import styled, { css, SimpleInterpolation } from 'styled-components'
import { Colors, colors, flexFlow, Sizes } from '@monorail/CommonStyles'
import { TabProps } from './Tab'

// TabBarIndicator is pos:abs to this element. Also we use offsetLeft on the Tab which references this position.
export const TabBarContainer = styled.div<CCTabBarProps>(
  ({ cssOverrides, size }) => css`
    ${flexFlow('row')};

    height: ${size}px;
    padding: 0 8px;
    position: relative;
    box-sizing: border-box;
    border-bottom: 1px solid ${colors(Colors.Grey94)};
    flex-shrink: 0;

    ${cssOverrides};
  `,
)

const TabBarIndicator = styled.div<TabBarIndicatorProps>(
  ({ left, width, duration }) => css`
    background: ${colors(Colors.BrandLightBlue)};
    border-radius: 3px 3px 0 0;
    bottom: 0;
    height: 3px;
    left: ${left}px;
    position: absolute;
    transition-duration: ${duration * 1.4}ms;
    transition-property: all;
    transition-timing-function: ease-in-out;
    width: ${width}px;
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
        <TabBarIndicator
          width={indicatorWidth}
          left={indicatorLeft}
          duration={indicatorTransitionDuration}
        />
      </TabBarContainer>
    )
  }
}
