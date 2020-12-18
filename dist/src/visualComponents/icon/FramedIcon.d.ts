/// <reference types="react" />
import { Colors } from '@monorail/helpers/color';
import { IconProps } from '@monorail/visualComponents/icon/Icon';
declare type FrameProps = {
    isArchived?: boolean;
    frameColor: Colors;
    frameSize?: number;
};
declare type Props = FrameProps & IconProps;
/** @deprecated see `v2/IconFrame` */
export declare const FramedIcon: (props: Props) => JSX.Element;
export {};
