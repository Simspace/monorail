import React, { Component } from 'react';
import { PopOverChildProps } from '@monorail/popOver/PopOver';
import { BBCardBackgroundProps } from '@monorail/cards/Cards';
import { StyledHtmlElement } from '@monorail/CoreUtils/type-level';
declare type Props = PopOverChildProps & {
    width: number;
};
declare type State = {
    dropDownHeight: number;
};
export declare class SidebarDropDown extends Component<Props, State> {
    static defaultProps: {
        width: number;
    };
    state: State;
    dropDownRef: React.RefObject<StyledHtmlElement<HTMLDivElement, BBCardBackgroundProps, any>>;
    componentDidMount(): void;
    componentDidUpdate(): void;
    updateMenuHeight: () => void;
    render(): JSX.Element;
}
export {};
