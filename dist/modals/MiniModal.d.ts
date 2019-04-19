import { FunctionComponent, ReactNode } from 'react';
import { PopOverChildProps } from '@monorail/popOver/PopOver';
import { SimpleInterpolation } from 'styled-components';
declare type Props = PopOverChildProps & {
    title: string;
    iconLeft?: string;
    headerChildren?: ReactNode;
    modalBackgroundCss?: SimpleInterpolation;
};
export declare const MiniModal: FunctionComponent<Props>;
export {};
