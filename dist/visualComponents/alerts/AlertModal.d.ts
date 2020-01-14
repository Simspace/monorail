import React, { FC } from 'react';
import { PopOverChildProps } from '@monorail/metaComponents/popOver/PopOver';
import { AlertType } from '@monorail/visualComponents/alerts/alertType';
export declare type AlertModalProps = Omit<PopOverChildProps, 'position'> & {
    alertType: AlertType;
    headerText?: string;
    onSubmit: () => void;
    primaryButtonText?: string;
    secondaryButtonText?: string;
    subtitleText?: React.ReactNode;
    titleText?: React.ReactNode;
    disabled?: boolean;
    className?: string;
    zIndex?: number;
};
export declare const AlertModal: FC<AlertModalProps>;
