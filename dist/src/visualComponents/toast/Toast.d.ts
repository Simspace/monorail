import { FC } from 'react';
import { CommonComponentType } from '@monorail/types';
import { IconType } from '@monorail/visualComponents/icon/IconType';
import { AlertLevel } from '@monorail/visualComponents/toast/types';
export declare enum ToastSize {
    Small = "small",
    Large = "large"
}
declare type ToastTileProps = {
    level?: AlertLevel;
    size?: ToastSize;
    icon?: IconType;
};
declare type ToastProps = CommonComponentType & ToastTileProps & {
    message: string;
    dismissible?: boolean;
    title?: string;
};
export declare const Toast: FC<ToastProps>;
export {};
