import React, { Component, ReactNode, SyntheticEvent } from 'react';
export declare enum dropDirections {
    Bottom = "bottom",
    Left = "left",
    Right = "right",
    Top = "top"
}
export declare type dropXDirectionType = dropDirections.Left | dropDirections.Right;
export declare type dropYDirectionType = dropDirections.Top | dropDirections.Bottom;
export declare type PopOverPosition = {
    dropXAmount: number;
    dropXDirection: dropXDirectionType;
    dropYAmount: number;
    dropYDirection: dropYDirectionType;
    gap: number;
    maxHeight: number;
    maxWidth: number;
    originHeight: number;
    originWidth: number;
    maxHeightCalc: string;
    maxWidthCalc: string;
};
export declare const defaultPopOverPosition: PopOverPosition;
export declare const getOverlayPosition: ({ target, gap, toSide, xDirection, yDirection, }: {
    target: Element;
    gap?: number | undefined;
    toSide?: boolean | undefined;
    xDirection?: dropDirections.Left | dropDirections.Right | undefined;
    yDirection?: dropDirections.Bottom | dropDirections.Top | undefined;
}) => {
    dropXDirection: dropXDirectionType;
    dropYDirection: dropYDirectionType;
    gap: number;
    originHeight: number;
    originWidth: number;
    dropXAmount: number;
    dropYAmount: number;
    maxHeight: number;
    maxWidth: number;
    maxHeightCalc: string;
    maxWidthCalc: string;
};
export declare type PopOverToggleProps = {
    isActive: boolean;
    onClick: (event: SyntheticEvent) => void;
};
export declare type PopOverChildProps = {
    isOpen: boolean;
    position: PopOverPosition;
    onClick: (event: SyntheticEvent) => void;
    togglePopOver: () => void;
    closingAnimationCompleted: () => void;
};
export declare type PopOverProps = {
    alwaysRender?: boolean;
    gap?: number;
    isOpen?: boolean;
    onToggle?: (isOpen: boolean) => void;
    popOver: (props: PopOverChildProps) => ReactNode;
    toggle: (props: PopOverToggleProps) => ReactNode;
    toSide?: boolean;
    xDirection?: dropXDirectionType;
    yDirection?: dropYDirectionType;
};
declare type PopOverState = {
    isOpen: boolean;
    isRendered: boolean;
    position: PopOverPosition;
};
declare type GetFunctionProps = {
    dropXDirection: dropXDirectionType;
    dropYDirection: dropYDirectionType;
    boundingRect: {
        top: number;
        bottom: number;
        left: number;
        right: number;
        width: number;
        height: number;
    };
    innerWidth: number;
    innerHeight: number;
    toSide: boolean;
    gap: number;
};
export declare const getDropAmounts: (props: GetFunctionProps) => {
    dropXAmount: number;
    dropYAmount: number;
    maxHeight: number;
    maxWidth: number;
    maxHeightCalc: string;
    maxWidthCalc: string;
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
