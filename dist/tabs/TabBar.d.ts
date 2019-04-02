import React, { Component, ReactNode } from 'react';
import { SimpleInterpolation } from 'styled-components';
import { Sizes } from '@monorail/CommonStyles';
import { TabProps } from './Tab';
export declare const TabBarContainer: import("styled-components").StyledComponent<"div", any, CCTabBarProps, never>;
declare type CCTabBarProps = {
    cssOverrides?: SimpleInterpolation;
    size: Sizes;
    activeTabIndex?: number;
};
declare type TabBarProps = CCTabBarProps & {
    getActiveTabIndex?: (activeTabIndex: number) => void;
    actions?: ReactNode;
};
declare type TabBarState = {
    activeTabIndex: number;
    indicatorLeft: number;
    indicatorTransitionDuration: number;
    indicatorWidth: number;
};
export declare class TabBar extends Component<TabBarProps, TabBarState> {
    static defaultProps: {
        size: Sizes;
    };
    state: TabBarState;
    componentDidUpdate(prevProps: TabBarProps, prevState: TabBarState): void;
    setIndicator: (width: number, left: number) => void;
    updateActiveTab: (index: number) => void;
    renderTabs(): (false | React.ReactElement<TabProps, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>)[];
    render(): JSX.Element;
}
export {};
