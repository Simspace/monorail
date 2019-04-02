import React, { Component } from 'react';
import { PopOverChildProps } from '@monorail/popOver/PopOver';
declare type Props = PopOverChildProps & {
    width?: number;
    zIndex: number;
};
declare type State = {
    menuHeight: number;
    menuWidth: number;
};
export declare class Menu extends Component<Props, State> {
    static defaultProps: {
        zIndex: number;
    };
    state: State;
    menuRef: React.RefObject<HTMLDivElement>;
    componentDidMount(): void;
    componentDidUpdate(): void;
    updateMenuHeight: () => void;
    render(): JSX.Element;
}
export {};
