import { Component, ReactNode } from 'react';
import { SimpleInterpolation } from 'styled-components';
import { Sizes } from '@monorail/helpers/exports';
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
export declare class TabBar extends Component<TabBarProps> {
    static defaultProps: {
        size: Sizes;
    };
    render(): JSX.Element;
}
export {};
