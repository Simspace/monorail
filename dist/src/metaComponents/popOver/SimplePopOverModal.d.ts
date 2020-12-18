import React from 'react';
import { PopOverPosition } from '@monorail/metaComponents/popOver/PopOver';
import { SimplePopOverChildProps } from '@monorail/metaComponents/popOver/SimplePopOver';
export declare type SimplePopOverModalProps = {
    hide: () => void;
    isOpen: boolean;
    open: (event: React.SyntheticEvent<Element, Event>) => void;
    position: PopOverPosition;
    render: (modalProps: SimplePopOverChildProps & {
        onClick: () => void;
    }) => JSX.Element;
};
export declare const SimplePopOverModal: (props: SimplePopOverModalProps) => JSX.Element;
