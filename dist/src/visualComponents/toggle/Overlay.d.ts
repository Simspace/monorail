import { Component, RefObject } from 'react';
import { CssOverridesType } from '@monorail/exports';
import { PopOverChildProps } from '@monorail/metaComponents/popOver/PopOver';
import { BBModalOverlayProps } from '@monorail/visualComponents/modals/Modals';
declare type Props = Omit<PopOverChildProps, 'position' | 'closingAnimationCompleted'> & {
    overlayProps?: Omit<BBModalOverlayProps, 'isOpen' | 'onClick'>;
    escToClose: boolean;
    usesScaleAnimation: boolean;
    zIndex: number;
    modalContainerRef?: RefObject<HTMLDivElement>;
    overlayContainerProps?: {
        cssOverrides: CssOverridesType;
    };
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
