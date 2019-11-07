/// <reference types="react" />
import { Colors } from '@monorail/helpers/color';
import { IconProps } from '@monorail/visualComponents/icon/Icon';
declare type Props = {
    frameColor: Colors;
    isArchived?: boolean;
} & IconProps;
export declare const FramedIcon: import("styled-components").StyledComponent<({ frameColor, isArchived, icon, ...otherProps }: Props) => JSX.Element, import("../../helpers/theme").GlobalAppThemeInterface, Props, never>;
export {};
