import { Component, ReactNode } from 'react';
export declare type TabBarIndicatorProps = {
    left: number;
    width: number;
    duration: number;
};
declare type TabBarProps = {
    getActiveTabIndex?: (activeTabIndex: number) => void;
    actions?: ReactNode;
    tabBarIndicator: (props: TabBarIndicatorProps) => ReactNode;
    activeTabIndex?: number;
};
declare type TabBarState = {
    activeTabIndex: number;
    indicatorLeft: number;
    indicatorTransitionDuration: number;
    indicatorWidth: number;
};
export declare class TabBarController extends Component<TabBarProps, TabBarState> {
    state: TabBarState;
    componentDidUpdate(prevProps: TabBarProps, prevState: TabBarState): void;
    setIndicator: (width: number, left: number) => void;
    updateActiveTab: (index: number) => void;
    renderTabs(): (false | JSX.Element)[];
    render(): JSX.Element;
}
export {};
