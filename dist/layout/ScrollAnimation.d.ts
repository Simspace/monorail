import React, { Component, RefObject } from 'react';
declare type Props = {
    scrollContainer: RefObject<HTMLDivElement>;
    animatingElement: RefObject<HTMLDivElement>;
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
    handleScroll: EventListener;
    render(): React.ReactNode;
}
export {};
