import React, { Component, MouseEventHandler, ReactNode } from 'react';
import { CommonComponentType } from '@monorail/types';
export declare const TitleContainer: import("styled-components").StyledComponent<"div", import("../helpers/theme").GlobalAppThemeInterface, {
    hasAboveContent: boolean;
}, never>;
export declare type BreadCrumbsType = Array<{
    title: string;
    path: string;
}>;
declare type PageHeaderNavigationProps = {
    breadCrumbs?: BreadCrumbsType;
};
export declare type PageHeaderProps = CommonComponentType & PageHeaderNavigationProps & {
    goBack?: MouseEventHandler | string;
    title: string;
    pageName?: string;
    actions?: ReactNode;
};
export declare class PageHeader extends Component<PageHeaderProps> {
    pageHeaderContainerRef: React.RefObject<HTMLDivElement>;
    renderBreadCrumbs: () => (false | JSX.Element)[][] | null;
    render(): JSX.Element;
}
export {};
