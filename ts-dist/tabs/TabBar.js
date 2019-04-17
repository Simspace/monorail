import React, { Component } from 'react';
import { isNil } from '@monorail/sharedHelpers/typeGuards';
import styled, { css } from 'styled-components';
import { Colors, getColor, flexFlow, Sizes } from '@monorail/helpers/exports';
// TabBarIndicator is pos:abs to this element. Also we use offsetLeft on the Tab which references this position.
export const TabBarContainer = styled.div(({ cssOverrides, size }) => css `
    ${flexFlow('row')};

    height: ${size}px;
    padding: 0 8px;
    position: relative;
    box-sizing: border-box;
    border-bottom: 1px solid ${getColor(Colors.Grey94)};
    flex-shrink: 0;

    ${cssOverrides};
  `);
const TabBarIndicator = styled.div(({ left, width, duration }) => css `
    background: ${getColor(Colors.BrandLightBlue)};
    border-radius: 3px 3px 0 0;
    bottom: 0;
    height: 3px;
    left: ${left}px;
    position: absolute;
    transition-duration: ${duration * 1.4}ms;
    transition-property: all;
    transition-timing-function: ease-in-out;
    width: ${width}px;
  `);
const TabBarActions = styled.div `
  ${flexFlow('row')};

  align-items: center;
  margin-left: auto;
  margin-right: 8px;
`;
export class TabBar extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            activeTabIndex: this.props.activeTabIndex || 0,
            indicatorLeft: 0,
            indicatorTransitionDuration: 0,
            indicatorWidth: 0,
        };
        this.setIndicator = (width, left) => this.setState(() => ({
            indicatorWidth: width,
            indicatorLeft: left,
        }));
        this.updateActiveTab = (index) => {
            const { getActiveTabIndex } = this.props;
            this.setState(() => ({ activeTabIndex: index }));
            getActiveTabIndex && getActiveTabIndex(index);
        };
    }
    componentDidUpdate(prevProps, prevState) {
        // Check if the indicator needs to move, if it does set the distance of the move as the transition duration.
        if (prevState.indicatorLeft !== this.state.indicatorLeft) {
            this.setState(() => ({
                indicatorTransitionDuration: Math.abs(prevState.indicatorLeft - this.state.indicatorLeft),
            }));
        }
        // Check if the activeTabIndex needs to change
        if (prevProps.activeTabIndex !== this.props.activeTabIndex) {
            this.setState(() => ({
                activeTabIndex: this.props.activeTabIndex || 0,
            }));
        }
    }
    renderTabs() {
        const { children } = this.props;
        const { activeTabIndex } = this.state;
        /**
         * If we're controlling the activeTabIndex with a prop,
         * then we set updateIsActive to undefined to prevent
         * automatic updates on Tab click.
         */
        return React.Children.map(children, (child, index) => !isNil(child) &&
            React.isValidElement(child) &&
            React.cloneElement(child, {
                index,
                isActive: index === activeTabIndex,
                setIndicator: this.setIndicator,
                updateIsActive: isNil(this.props.activeTabIndex)
                    ? this.updateActiveTab
                    : undefined,
            }));
    }
    render() {
        const { cssOverrides, size, actions } = this.props;
        const { indicatorLeft, indicatorWidth, indicatorTransitionDuration, } = this.state;
        return (React.createElement(TabBarContainer, { cssOverrides: cssOverrides, size: size },
            this.renderTabs(),
            !isNil(actions) && (React.createElement(TabBarActions, { id: "tabBarActions" }, actions)),
            React.createElement(TabBarIndicator, { width: indicatorWidth, left: indicatorLeft, duration: indicatorTransitionDuration })));
    }
}
TabBar.defaultProps = {
    size: Sizes.DP24,
};
//# sourceMappingURL=TabBar.js.map