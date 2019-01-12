import React, { Component, ReactElement } from 'react'
import { isNil } from 'src/utils'
import { Colors, colors, flexFlow, Sizes } from 'src/CommonStyles'
import styled, { css, SimpleInterpolation } from 'styled-components'
import { TabProps } from './Tab'

// TabBarIndicator is pos:abs to this element. Also we use offsetLeft on the Tab which references this position.
const CCTabBar = styled<CCTabBarProps, 'div'>('div')`
  ${flexFlow('row')};

  height: ${({ size }) => size}px;
  padding: 0 8px;
  position: relative;

  ${({ css: cssOverrides }) => cssOverrides};
`

const CCTabBarIndicator = styled<TabBarIndicator, 'div'>('div')`
  ${({ left, width, duration }) => css`
    left: ${left}px;
    width: ${width}px;
    transition-duration: ${duration * 1.4}ms;
  `};

  background: ${colors(Colors.BrandLightBlue)};
  border-radius: 3px 3px 0 0;
  bottom: 0;
  height: 3px;
  position: absolute;
  transition-property: all;
  transition-timing-function: ease-in-out;
`

type CCTabBarProps = {
  css?: SimpleInterpolation
  size: Sizes
}

type TabBarIndicator = {
  left: number
  width: number
  duration: number
}

type TabBarProps = CCTabBarProps & {
  getActiveTabIndex?: (activeTabIndex: number) => void
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
    activeTabIndex: 0,
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

    return React.Children.map(
      children,
      (child, index: number) =>
        !isNil(child) &&
        React.isValidElement<TabProps>(child) &&
        React.cloneElement(child, {
          index,
          isActive: index === activeTabIndex,
          setIndicator: this.setIndicator,
          updateIsActive: this.updateActiveTab,
        }),
    )
  }

  render() {
    const { css: cssOverrides, size } = this.props
    const {
      indicatorLeft,
      indicatorWidth,
      indicatorTransitionDuration,
    } = this.state

    return (
      <CCTabBar css={cssOverrides} size={size}>
        {this.renderTabs()}
        <CCTabBarIndicator
          width={indicatorWidth}
          left={indicatorLeft}
          duration={indicatorTransitionDuration}
        />
      </CCTabBar>
    )
  }
}
