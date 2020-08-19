import { FC } from 'react';
import { AlertLevel } from '@monorail/visualComponents/toast/types';
import { IconType } from '@monorail/visualComponents/icon/IconType';
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
//# sourceMappingURL=AlertBanner.d.ts.map