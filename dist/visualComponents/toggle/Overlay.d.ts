import { Component, RefObject } from 'react';
import { Omit } from 'typelevel-ts';
import { PopOverChildProps } from '@monorail/metaComponents/popOver/PopOver';
import { BBModalOverlayProps } from '@monorail/visualComponents/modals/Modals';
declare type Props = Omit<PopOverChildProps, 'position' | 'closingAnimationCompleted'> & {
    overlayProps?: Omit<BBModalOverlayProps, 'isOpen' | 'onClick'>;
    escToClose: boolean;
    usesScaleAnimation: boolean;
    zIndex: number;
    modalContainerRef?: RefObject<HTMLDivElement>;
};
declare type State = {
    isRendered: boolean;
};
export declare class Overlay extends Component<Props, State> {
    static defaultProps: {
        usesScaleAnimation: boolean;
        escToClose: boolean;
        zIndex: number;
    };
    state: State;
    componentDidMount(): void;
    componentWillUnmount(): void;
    escFunction: (event: KeyboardEvent) => null;
    render(): JSX.Element;
}
export {};
