import { ReactNode } from 'react';
import { AlertLevel } from '@monorail/visualComponents/toast/types';
declare type AlertBannerProps = {
    level: AlertLevel;
    message: ReactNode;
    title?: string;
} & ({
    dismissible?: true;
    onClick: () => void;
} | {
    dismissible: false;
});
export declare const AlertBanner: (props: AlertBannerProps) => JSX.Element;
export {};
