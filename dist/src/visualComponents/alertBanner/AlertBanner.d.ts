import { FC } from 'react';
import { IconType } from '@monorail/visualComponents/icon/IconType';
import { AlertLevel } from '@monorail/visualComponents/toast/types';
declare type AlertBannerProps = {
    level: AlertLevel;
    icon?: IconType;
    message: string;
    dismissible?: boolean;
    title?: string;
    onClick: () => void;
};
export declare const AlertBanner: FC<AlertBannerProps>;
export {};
