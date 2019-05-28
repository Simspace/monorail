import { FunctionComponent, ReactNode } from 'react';
import { SimpleInterpolation } from 'styled-components';
import { PopOverChildProps } from '@monorail/popOver/PopOver';
declare type Props = PopOverChildProps & {
    title: string;
    iconLeft?: string;
    headerChildren?: ReactNode;
    modalBackgroundCss?: SimpleInterpolation;
};
export declare const MiniModal: FunctionComponent<Props>;
export {};
