import React, { Component, MouseEvent as ReactMouseEvent, ReactNode, RefObject } from 'react';
import { StyledHtmlElement } from '@monorail/CoreUtils/type-level';
import { CommonComponentType } from '@monorail/types';
export declare const TitleContainer: import("styled-components").StyledComponentClass<React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & {
    hasAboveContent: boolean;
}, any, React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & {
    hasAboveContent: boolean;
}>;
export declare type PageHeaderShadowRefType = StyledHtmlElement<HTMLDivElement, PageHeaderShadowProps>;
declare type PageHeaderShadowProps = {
    willAnimateShadow: boolean;
    flush: boolean;
};
declare type BreadCrumbsContainerProps = {
    breadCrumbs?: Array<{
        title: string;
        path?: (event: ReactMouseEvent<HTMLAnchorElement>) => void;
    }>;
};
declare type PageHeaderContainerProps = CommonComponentType & {
    flush: boolean;
    hasAboveContent: boolean;
};
declare type PageHeaderProps = CommonComponentType & BreadCrumbsContainerProps & {
    goBack?: (event: ReactMouseEvent<Element>) => void;
    title: string;
    action?: ReactNode;
    shadowRef?: RefObject<PageHeaderShadowRefType>;
    willAnimateShadow: boolean;
    flush: boolean;
};
export declare class PageHeader extends Component<PageHeaderProps> {
    static defaultProps: {
        willAnimateShadow: boolean;
        flush: boolean;
    };
    pageHeaderContainerRef: React.RefObject<StyledHtmlElement<HTMLDivElement, PageHeaderContainerProps, any>>;
    renderBreadCrumbs: () => (false | JSX.Element)[][] | null;
    render(): JSX.Element;
}
export {};
