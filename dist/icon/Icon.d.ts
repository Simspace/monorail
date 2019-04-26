import { MouseEvent } from 'react';
import { SimpleInterpolation } from 'styled-components';
import { Omit } from 'typelevel-ts';
export declare const MaterialIconFontFace: import("styled-components").GlobalStyleComponent<{}, import("styled-components").DefaultTheme>;
export declare const Icon: import("styled-components").StyledComponent<({ cssOverrides: _cssOverrides, icon, ...otherProps }: IconProps) => JSX.Element, any, IconProps, never>;
export declare type IconProps = {
    className?: string;
    cssOverrides?: SimpleInterpolation;
    icon: string;
    onClick?: (event: MouseEvent<Element>) => void;
    size?: number;
};
export declare type CustomIconProps = Omit<IconProps, 'icon'>;
