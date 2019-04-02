import React, { Component } from 'react';
import { PopOverChildProps } from '@monorail/popOver/PopOver';
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
    dropDownRef: React.RefObject<HTMLDivElement>;
    componentDidMount(): void;
    componentDidUpdate(): void;
    updateMenuHeight: () => void;
    render(): JSX.Element;
}
export {};
