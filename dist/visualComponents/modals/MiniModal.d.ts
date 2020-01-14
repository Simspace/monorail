import { FC, ReactNode } from 'react';
import { SimpleInterpolation } from 'styled-components';
import { PopOverChildProps } from '@monorail/metaComponents/popOver/PopOver';
declare type Props = PopOverChildProps & {
    title: string;
    iconLeft?: string;
    headerChildren?: ReactNode;
    modalBackgroundCss?: SimpleInterpolation;
};
export declare const MiniModal: FC<Props>;
export {};
