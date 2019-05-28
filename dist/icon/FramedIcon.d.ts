/// <reference types="react" />
import { Colors } from '@monorail/helpers/color';
import { IconProps } from '@monorail/icon/Icon';
declare type Props = {
    frameColor: Colors;
} & IconProps;
export declare const FramedIcon: import("styled-components").StyledComponent<({ frameColor, ...otherProps }: Props) => JSX.Element, import("../helpers/theme").GlobalAppThemeInterface, Props, never>;
export {};
