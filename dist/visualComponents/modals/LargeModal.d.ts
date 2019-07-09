import { ReactNode } from 'react';
import { SimpleInterpolation } from 'styled-components';
import { PopOverChildProps } from '@monorail/metaComponents/popOver/PopOver';
import { FCwDP } from '@monorail/sharedHelpers/react';
declare type Props = PopOverChildProps & DefaultProps & {
    title: string;
    iconLeft?: string;
    headerStyles?: SimpleInterpolation;
    headerRowChildren?: ReactNode;
};
declare type DefaultProps = {
    zIndex: number;
};
export declare const LargeModal: FCwDP<Props, DefaultProps>;
export {};
