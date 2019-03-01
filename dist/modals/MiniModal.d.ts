import { Component, ReactNode } from 'react';
import { PopOverChildProps } from '@monorail/popOver/PopOver';
import { SimpleInterpolation } from 'styled-components';
declare type Props = PopOverChildProps & {
    title: string;
    iconLeft?: string;
    headerChildren?: ReactNode;
    modalBackgroundCss?: SimpleInterpolation;
};
export declare class MiniModal extends Component<Props> {
    render(): JSX.Element;
}
export {};
