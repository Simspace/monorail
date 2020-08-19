import React from 'react';
import { PopOverPosition } from '@monorail/metaComponents/popOver/PopOver';
import { SimplePopOverChildProps } from '@monorail/metaComponents/popOver/SimplePopOver';
export declare type SimplePopOverModalProps = {
    isOpen: boolean;
    show: () => void;
    hide: () => void;
    open: (event: React.SyntheticEvent<Element, Event>) => void;
    position: PopOverPosition;
    setPosition: React.Dispatch<React.SetStateAction<PopOverPosition>>;
    render: (modalProps: SimplePopOverChildProps & {
        onClick: () => void;
    }) => JSX.Element;
};
export declare const SimplePopOverModal: (props: SimplePopOverModalProps) => JSX.Element;
//# sourceMappingURL=SimplePopOverModal.d.ts.map