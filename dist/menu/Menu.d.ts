import React, { Component, ReactNode } from 'react';
import { SimpleInterpolation } from 'styled-components';
import { StyledHtmlElement } from '@monorail/CoreUtils/type-level';
import { PopOverChildProps } from '@monorail/popOver/PopOver';
declare type MenuProps = {
    children: ReactNode;
    css?: SimpleInterpolation;
    width: string;
};
declare type Props = PopOverChildProps & {
    width?: number;
};
declare type State = {
    menuHeight: number;
    menuWidth: number;
};
export declare class Menu extends Component<Props, State> {
    state: State;
    menuRef: React.RefObject<StyledHtmlElement<HTMLDivElement, MenuProps, unknown>>;
    componentDidMount(): void;
    componentDidUpdate(): void;
    updateMenuHeight: () => void;
    render(): JSX.Element;
}
export {};
