import React, { Component, MouseEvent as ReactMouseEvent, ReactNode, RefObject } from 'react';
import { CommonComponentType } from '@monorail/types';
export declare const TitleContainer: import("styled-components").StyledComponent<"div", any, {
    hasAboveContent: boolean;
}, never>;
export declare type PageHeaderShadowProps = {
    willAnimateShadow: boolean;
    flush: boolean;
};
declare type BreadCrumbsContainerProps = {
    breadCrumbs?: Array<{
        title: string;
        path?: (event: ReactMouseEvent<HTMLAnchorElement>) => void;
    }>;
};
declare type PageHeaderProps = CommonComponentType & BreadCrumbsContainerProps & {
    goBack?: (event: ReactMouseEvent<Element>) => void;
    title: string;
    action?: ReactNode;
    shadowRef?: RefObject<HTMLDivElement>;
    willAnimateShadow: boolean;
    flush: boolean;
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
