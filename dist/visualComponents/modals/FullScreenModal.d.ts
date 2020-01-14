import { FC, ReactNode } from 'react';
import { PopOverChildProps } from '@monorail/metaComponents/popOver/PopOver';
declare type Props = Omit<PopOverChildProps, 'position'> & {
    customCloseButton?: ReactNode;
    headerChildren?: ReactNode;
    title?: string;
    escToClose?: boolean;
    iconLeft?: string;
    noHeader?: boolean;
    zIndex?: number;
};
export declare const FullScreenModal: FC<Props>;
export {};
