import { Component } from 'react';
import { PopOverChildProps } from '@monorail/popOver/PopOver';
declare type Props = PopOverChildProps & {
    title: string;
    iconLeft?: string;
};
export declare class MediumModal extends Component<Props> {
    render(): JSX.Element;
}
export {};
