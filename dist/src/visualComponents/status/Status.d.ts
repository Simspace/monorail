import { FC } from 'react';
import { Colors, FontSizes } from '@monorail/helpers/exports';
import { CommonComponentType } from '@monorail/types';
import { IconType } from '@monorail/visualComponents/icon/IconType';
declare type StatusWrapperProps = {
    inactive?: boolean;
    statusColor?: Colors;
    hasBackground?: boolean;
};
export declare type StatusProps = CommonComponentType & StatusWrapperProps & {
    fontSize?: FontSizes;
    icon?: IconType;
    children?: number | string;
};
export declare const Status: FC<StatusProps>;
export {};
