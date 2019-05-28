import React, { Component, MouseEventHandler, ReactNode, RefObject } from 'react';
import { CommonComponentType } from '@monorail/types';
export declare const TitleContainer: import("styled-components").StyledComponent<"div", import("../helpers/theme").GlobalAppThemeInterface, {
    hasAboveContent: boolean;
}, never>;
export declare type PageHeaderShadowProps = {
    willAnimateShadow: boolean;
    flush: boolean;
};
export declare type BreadCrumbsType = Array<{
    title: string;
    path: string;
}>;
declare type PageHeaderNavigationProps = {
    breadCrumbs?: BreadCrumbsType;
};
declare type PageHeaderProps = CommonComponentType & PageHeaderNavigationProps & {
    goBack?: MouseEventHandler | string;
    title: string;
    pageName?: string;
    action?: ReactNode;
    shadowRef?: RefObject<HTMLDivElement>;
    willAnimateShadow: boolean;
    flush: boolean;
    noShadow?: boolean;
};
export declare class PageHeader extends Component<PageHeaderProps> {
    static defaultProps: {
        willAnimateShadow: boolean;
        flush: boolean;
    };
    pageHeaderContainerRef: React.RefObject<HTMLDivElement>;
    renderBreadCrumbs: () => (false | JSX.Element)[][] | null;
    render(): JSX.Element;
}
export {};
