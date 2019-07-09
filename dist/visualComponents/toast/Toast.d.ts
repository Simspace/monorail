import { FCwDP } from '@monorail/sharedHelpers/react';
import { CommonComponentType } from '@monorail/types';
import { AlertLevel } from '@monorail/visualComponents/toast/types';
export declare enum ToastSize {
    Small = "small",
    Large = "large"
}
declare type ToastTileDefaultProps = {
    level: AlertLevel;
    size: ToastSize;
    icon: string;
};
declare type Props = CommonComponentType & {
    message: string;
};
declare type DefaultProps = ToastTileDefaultProps & {
    dismissible: boolean;
    title: string;
};
export declare const Toast: FCwDP<Props, DefaultProps>;
export {};
