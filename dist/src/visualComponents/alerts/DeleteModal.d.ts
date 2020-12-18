import { FC } from 'react';
import { AlertModalProps } from '@monorail/visualComponents/alerts/AlertModal';
export declare type DeleteModalProps = Omit<AlertModalProps, 'alertType'> & {
    itemName: string;
    itemType?: string;
    action?: string;
};
export declare const DeleteModal: FC<DeleteModalProps>;
