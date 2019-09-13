import React, { FC } from 'react';
import { PopOverChildProps } from '@monorail/metaComponents/popOver/PopOver';
import { AlertType } from '@monorail/visualComponents/alerts/alertType';
declare type Props = PopOverChildProps & {
    onSubmit: () => void;
    alertType: AlertType;
    titleText?: React.ReactNode;
    subtitleText?: React.ReactNode;
    primaryButtonText?: string;
    secondaryButtonText?: string;
};
export declare const AlertModal: FC<Props>;
export {};
