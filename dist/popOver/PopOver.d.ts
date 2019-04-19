import React, { Component, ReactNode, SyntheticEvent } from 'react';
export declare type PopOverPosition = {
    dropXAmount: number;
    dropXDirection: 'left' | 'right';
    dropYAmount: number;
    dropYDirection: 'top' | 'bottom';
    gap: number;
    maxHeight: number;
    maxWidth: number;
    originHeight: number;
    originWidth: number;
    maxHeightCalc: string;
    maxWidthCalc: string;
};
export declare type PopOverToggleProps = {
    isOpen: boolean;
    onClick: (event: SyntheticEvent) => void;
};
export declare type PopOverChildProps = {
    isOpen: boolean;
    position: PopOverPosition;
    onClick: (event: SyntheticEvent) => void;
    togglePopOver: () => void;
    closingAnimationCompleted: () => void;
};
declare type PopOverProps = {
    alwaysRender: boolean;
    document?: Document;
    gap: number;
    isOpen?: boolean;
    onToggle?: (isOpen: boolean) => void;
    popOver: (props: PopOverChildProps) => ReactNode;
    toggle: (props: PopOverToggleProps) => ReactNode;
    toSide: boolean;
};
declare type PopOverState = {
    isOpen: boolean;
    isRendered: boolean;
    position: PopOverPosition;
};
export declare class PopOver extends Component<PopOverProps, PopOverState> {
    static getDerivedStateFromProps(props: PopOverProps, state: PopOverState): PopOverState;
    static defaultProps: {
        gap: number;
        toSide: boolean;
        alwaysRender: boolean;
    };
    state: PopOverState;
    togglePopOver: () => void;
    closingAnimationCompleted: () => void;
    onClick: (event: React.SyntheticEvent<Element, Event>) => void;
    render(): JSX.Element;
}
export {};
