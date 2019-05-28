import React, { Component, ReactElement, ReactNode } from 'react'
import styled from 'styled-components'

import { flexFlow } from '@monorail/helpers/exports'
import { isNil } from '@monorail/sharedHelpers/typeGuards'
import { TabProps } from '@monorail/tabs/Tab'
import { TabController } from '@monorail/tabs/TabController'

// TODO(unsafe-any): Fix unsafe anys
// tslint:disable no-unsafe-any

const TabBarActions = styled.div`
  ${flexFlow('row')};

  align-items: center;
  margin-left: auto;
  margin-right: 8px;
`

export type TabBarIndicatorProps = {
  left: number
  width: number
  duration: number
}

type TabBarProps = {
  getActiveTabIndex?: (activeTabIndex: number) => void
  actions?: ReactNode
  tabBarIndicator: (props: TabBarIndicatorProps) => ReactNode
  activeTabIndex?: number
}

type TabBarState = {
  activeTabIndex: number
  indicatorLeft: number
  indicatorTransitionDuration: number
  indicatorWidth: number
}

export class TabBarController extends Component<TabBarProps, TabBarState> {
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
      children as ReactElement<TabProps>,
      (child: ReactElement<TabProps>, index: number) =>
        !isNil(child) &&
        React.isValidElement(child) && (
          <TabController
            key={index}
            index={index}
            isActive={index === activeTabIndex}
            setIndicator={this.setIndicator}
            updateIsActive={
              isNil(this.props.activeTabIndex)
                ? this.updateActiveTab
                : undefined
            }
            onClick={child.props.onClick}
            tab={props => React.cloneElement(child, props)}
          />
        ),
    )
  }

  render() {
    const { actions, tabBarIndicator } = this.props
    const {
      indicatorLeft,
      indicatorWidth,
      indicatorTransitionDuration,
    } = this.state

    return (
      <>
        {this.renderTabs()}

        {!isNil(actions) && (
          <TabBarActions id="tabBarActions">{actions}</TabBarActions>
        )}
        {tabBarIndicator({
          width: indicatorWidth,
          left: indicatorLeft,
          duration: indicatorTransitionDuration,
        })}
      </>
    )
  }
}
// tslint:enable
