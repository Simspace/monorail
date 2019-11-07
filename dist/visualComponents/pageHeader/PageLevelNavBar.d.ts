import { FC, ReactNode } from 'react';
export declare const PageLevelNavBarContainer: import("styled-components").StyledComponent<"div", import("../../helpers/theme").GlobalAppThemeInterface, {}, never>;
declare type PageLevelNavBarProps = {
    activeTabIndex?: number;
    getActiveTabIndex?: (activeTabIndex: number) => void;
    actions?: ReactNode;
};
export declare const PageLevelNavBar: FC<PageLevelNavBarProps>;
export {};
