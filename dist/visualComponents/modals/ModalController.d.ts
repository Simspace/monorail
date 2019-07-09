import { FC, ReactNode } from 'react';
import { PopOverChildProps } from '@monorail/metaComponents/popOver/PopOver';
export declare type ModalControllerProps = {
    isOpen: boolean;
    toggleIsOpen: () => void;
    children: (props: PopOverChildProps) => ReactNode;
};
export declare const ModalController: FC<ModalControllerProps>;
