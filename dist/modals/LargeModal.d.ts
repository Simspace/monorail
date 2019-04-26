import { PopOverChildProps } from '@monorail/popOver/PopOver';
import { FCwDP } from '@monorail/sharedHelpers/react';
import { SimpleInterpolation } from 'styled-components';
declare type Props = PopOverChildProps & DefaultProps & {
    title: string;
    iconLeft?: string;
    headerStyles?: SimpleInterpolation;
};
declare type DefaultProps = {
    zIndex: number;
};
export declare const LargeModal: FCwDP<Props, DefaultProps>;
export {};
