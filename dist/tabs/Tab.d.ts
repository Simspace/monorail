import React, { Component, MouseEvent } from 'react';
import { LinkProps } from '@monorail/list/List';
import { CommonComponentType } from '@monorail/types';
import { StyledHtmlElement } from '@monorail/CoreUtils/type-level';
declare type CCTabProps = CommonComponentType & LinkProps & {
    onClick?: (event: MouseEvent<HTMLDivElement>) => void;
    isActive: boolean;
};
export declare type TabProps = CCTabProps & {
    index?: number;
    setIndicator: (width: number, offsetLeft: number) => void;
    updateIsActive: (i: number) => void;
};
export declare class Tab extends Component<TabProps> {
    static defaultProps: {
        isActive: boolean;
        setIndicator: () => void;
        updateIsActive: () => void;
    };
    tabRef: React.RefObject<StyledHtmlElement<HTMLDivElement, CCTabProps, unknown>>;
    componentDidMount(): void;
    componentDidUpdate(prevProps: TabProps): void;
    callSetIndicator: () => void;
    private onClick;
    render(): JSX.Element;
}
export {};