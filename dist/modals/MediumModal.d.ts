import { FCwDP } from '@monorail/sharedHelpers/react';
import { SimpleInterpolation } from 'styled-components';
import { PopOverChildProps } from '@monorail/popOver/PopOver';
declare type Props = PopOverChildProps & DefaultProps & {
    title: string;
    iconLeft?: string;
    headerStyles?: SimpleInterpolation;
};
declare type DefaultProps = {
    zIndex: number;
};
export declare const MediumModal: FCwDP<Props, DefaultProps>;
export {};
