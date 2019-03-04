import React, { Component, ReactNode, RefObject } from 'react';
import { StyledHtmlElement } from '@monorail/CoreUtils/type-level';
import { PageHeaderShadowRefType } from '@monorail/pageHeader/PageHeader';
export declare type SingleCollectionContainerRef = StyledHtmlElement<HTMLDivElement, {}>;
declare type Props = {
    header: (props: {
        shadowRef: RefObject<PageHeaderShadowRefType>;
        willAnimateShadow: boolean;
    }) => ReactNode;
    content: ReactNode;
};
export declare class SingleCollection extends Component<Props> {
    singleCollectionContainer: React.RefObject<StyledHtmlElement<HTMLDivElement, {}, unknown>>;
    pageHeaderShadow: React.RefObject<StyledHtmlElement<HTMLDivElement, import("../pageHeader/PageHeader").PageHeaderShadowProps, unknown>>;
    render(): JSX.Element;
}
export {};
