import { FC, ReactNode } from 'react';
import { SimpleInterpolation } from 'styled-components';
import { PopOverChildProps } from '@monorail/metaComponents/popOver/PopOver';
declare type Props = Omit<PopOverChildProps, 'position'> & {
    title: string;
    iconLeft?: string;
    headerStyles?: SimpleInterpolation;
    headerRowChildren?: ReactNode;
    zIndex?: number;
};
export declare const LargeModal: FC<Props>;
export {};
