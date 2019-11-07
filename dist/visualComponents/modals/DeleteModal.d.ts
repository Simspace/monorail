import React, { FC } from 'react';
import { PopOverChildProps } from '@monorail/metaComponents/popOver/PopOver';
export declare type DeleteModalProps = PopOverChildProps & {
    itemName: string;
    onSubmit: () => void;
    titleText?: React.ReactNode;
    subtitleText?: React.ReactNode;
};
export declare const DeleteModal: FC<DeleteModalProps>;
