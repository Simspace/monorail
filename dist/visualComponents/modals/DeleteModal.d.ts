import { FC } from 'react';
import { PopOverChildProps } from '@monorail/metaComponents/popOver/PopOver';
export declare type DeleteModalProps = PopOverChildProps & {
    itemName: string;
    onSubmit: () => void;
};
export declare const DeleteModal: FC<DeleteModalProps>;
