import React, { MouseEvent } from 'react';
import { Colors } from '@monorail/helpers/exports';
import { CommonComponentType } from '@monorail/types';
import { IconType } from '@monorail/visualComponents/icon/IconType';
export declare const MaterialIconFontFace: import("styled-components").GlobalStyleComponent<{}, import("styled-components").DefaultTheme>;
export declare const Icon: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<CommonComponentType & {
    className?: string | undefined;
    icon: IconType;
    onClick?: OnClick | undefined;
    size?: number | undefined;
    /**
     * NOTE: `title` does not work for custom icons unless the custom icon handles
     * it specifically. See `TrackingItem` for an example.
     */
    title?: string | undefined;
    color?: Colors | undefined;
} & React.RefAttributes<HTMLElement>>, any, IconProps, never>;
export declare type OnClick = (event: MouseEvent<Element>) => void;
export declare type IconProps = CommonComponentType & {
    className?: string;
    icon: IconType;
    onClick?: OnClick;
    size?: number;
    /**
     * NOTE: `title` does not work for custom icons unless the custom icon handles
     * it specifically. See `TrackingItem` for an example.
     */
    title?: string;
    color?: Colors;
};
export declare type CustomIconProps = Omit<IconProps, 'icon'>;
