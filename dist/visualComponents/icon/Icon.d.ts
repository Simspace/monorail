import React, { MouseEvent } from 'react';
import { Omit } from 'typelevel-ts';
import { CommonComponentType } from '@monorail/types';
export declare const MaterialIconFontFace: import("styled-components").GlobalStyleComponent<{}, import("styled-components").DefaultTheme>;
export declare const Icon: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<CommonComponentType & {
    className?: string | undefined;
    icon: string;
    onClick?: OnClick | undefined;
    size?: number | undefined;
    title?: string | undefined;
} & React.RefAttributes<HTMLElement>>, any, IconProps, never>;
export declare type OnClick = (event: MouseEvent<Element>) => void;
export declare type IconProps = CommonComponentType & {
    className?: string;
    icon: string;
    onClick?: OnClick;
    size?: number;
    title?: string;
};
export declare type CustomIconProps = Omit<IconProps, 'icon'>;