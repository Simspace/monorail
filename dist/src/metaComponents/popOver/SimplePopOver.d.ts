import { ReactNode } from 'react';
import { PopOverPosition } from '@monorail/metaComponents/popOver/PopOver';
export declare type SimplePopOverChildProps = {
    isOpen: boolean;
    position: PopOverPosition;
    togglePopOver: () => void;
    closingAnimationCompleted: () => void;
};
export declare type SimplePopOverProps = {
    isOpen: boolean;
    onClose?: () => void;
    popOver: (props: SimplePopOverChildProps) => ReactNode;
    position: PopOverPosition;
};
export declare const SimplePopOver: (props: SimplePopOverProps) => JSX.Element;
