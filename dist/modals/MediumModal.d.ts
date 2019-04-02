import { Component } from 'react';
import { PopOverChildProps } from '@monorail/popOver/PopOver';
import { SimpleInterpolation } from 'styled-components';
declare type Props = PopOverChildProps & {
    title: string;
    iconLeft?: string;
    headerStyles?: SimpleInterpolation;
};
export declare class MediumModal extends Component<Props> {
    render(): JSX.Element;
}
export {};
