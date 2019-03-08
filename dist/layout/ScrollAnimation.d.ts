import React, { Component, RefObject } from 'react';
import { StyledHtmlElement } from '@monorail/CoreUtils/type-level';
import { PageHeaderShadowProps } from '../pageHeader/PageHeader';
declare type Props = {
    scrollContainer: RefObject<StyledHtmlElement<HTMLDivElement, {}>>;
    animatingElement: RefObject<StyledHtmlElement<HTMLDivElement, PageHeaderShadowProps>>;
    animationFunction: (props: {
        scrollAmount: number;
        animationTermination: number;
    }) => string;
    animationTermination: number;
};
declare type State = {
    hasEventHandler: boolean;
};
export declare class ScrollAnimation extends Component<Props, State> {
    state: State;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    handleScroll: (event: UIEvent) => void;
    render(): React.ReactNode;
}
export {};
