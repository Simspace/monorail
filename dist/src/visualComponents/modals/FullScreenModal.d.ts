import { FC, ReactNode } from 'react';
import { PopOverChildProps } from '@monorail/metaComponents/popOver/PopOver';
import { IconType } from '@monorail/visualComponents/icon/IconType';
declare type Props = Omit<PopOverChildProps, 'position'> & {
    customCloseButton?: ReactNode;
    headerChildren?: ReactNode;
    title?: string;
    escToClose?: boolean;
    iconLeft?: IconType;
    noHeader?: boolean;
    zIndex?: number;
};
export declare const FullScreenModal: FC<Props>;
export {};
