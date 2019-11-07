import React, { FC } from 'react';
import { PopOverChildProps } from '@monorail/metaComponents/popOver/PopOver';
import { AlertType } from '@monorail/visualComponents/alerts/alertType';
declare type Props = PopOverChildProps & {
    alertType: AlertType;
    headerText?: string;
    onSubmit: () => void;
    primaryButtonText?: string;
    secondaryButtonText?: string;
    subtitleText?: React.ReactNode;
    titleText?: React.ReactNode;
};
export declare const AlertModal: FC<Props>;
export {};
