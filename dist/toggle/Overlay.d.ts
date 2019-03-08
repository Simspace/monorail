import { Component } from 'react';
import { BBModalOverlayProps } from '@monorail/modals/Modals';
import { PopOverChildProps } from '@monorail/popOver/PopOver';
import { Omit } from 'typelevel-ts';
declare type Props = Omit<PopOverChildProps, 'position'> & {
    overlayProps?: Omit<BBModalOverlayProps, 'isOpen' | 'onClick'>;
    escToClose: boolean;
    usesScaleAnimation: boolean;
};
export declare class Overlay extends Component<Props> {
    static defaultProps: {
        usesScaleAnimation: boolean;
        escToClose: boolean;
    };
    componentDidMount(): void;
    componentWillUnmount(): void;
    escFunction: (event: KeyboardEvent) => null;
    render(): JSX.Element;
}
export {};
