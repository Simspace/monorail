import { MouseEvent } from 'react';
import { SimpleInterpolation } from 'styled-components';
import { Omit } from 'typelevel-ts';
export declare const Icon: import("styled-components").StyledComponentClass<IconProps, any, Pick<IconProps, "cssOverrides" | "icon" | "className" | "onClick" | "size"> & {
    theme?: any;
}>;
export declare type IconProps = {
    className?: string;
    cssOverrides?: SimpleInterpolation;
    icon: string;
    onClick?: (event: MouseEvent<Element>) => void;
    size?: number;
};
export declare type CustomIconProps = Omit<IconProps, 'icon'>;
