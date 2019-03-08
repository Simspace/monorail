import { Component, ReactNode } from 'react';
import { PopOverChildProps } from '@monorail/popOver/PopOver';
declare type Props = PopOverChildProps & {
    customCloseButton?: ReactNode;
    escToClose?: boolean;
    headerChildren?: ReactNode;
    iconLeft?: string;
    title: string;
    noHeader?: boolean;
};
export declare class FullScreenModal extends Component<Props> {
    render(): JSX.Element;
}
export {};
