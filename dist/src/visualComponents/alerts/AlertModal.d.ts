import React, { FC } from 'react';
import { PopOverChildProps } from '@monorail/metaComponents/popOver/PopOver';
import { AlertType } from '@monorail/visualComponents/alerts/alertType';
export declare type AlertModalProps = Omit<PopOverChildProps, 'position'> & {
    alertType: AlertType;
    className?: string;
    disabled?: boolean;
    headerText?: string;
    onSubmit: () => void;
    padding?: number;
    primaryButtonText?: string;
    secondaryButtonText?: string;
    subtitleText?: React.ReactNode;
    titleText?: React.ReactNode;
    zIndex?: number;
};
export declare const AlertModal: FC<AlertModalProps>;
//# sourceMappingURL=AlertModal.d.ts.map