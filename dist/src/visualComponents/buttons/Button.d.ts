import React, { FC, MouseEvent, ReactNode, ReactType } from 'react';
import { CommonComponentType, LinkProps } from '@monorail/types';
import { ButtonDisplay, ButtonMode, ButtonSize } from '@monorail/visualComponents/buttons/buttonTypes';
import { IconType } from '@monorail/visualComponents/icon/IconType';
export declare const buttonDisplayCss: {
    primary: import("styled-components").FlattenSimpleInterpolation;
    secondary: import("styled-components").FlattenSimpleInterpolation;
    outline: import("styled-components").FlattenSimpleInterpolation;
    chromeless: import("styled-components").FlattenSimpleInterpolation;
    buttonbar: import("styled-components").FlattenSimpleInterpolation;
    toolbar: import("styled-components").FlattenSimpleInterpolation;
};
export declare const buttonPressedDisplayCss: {
    primary: import("styled-components").FlattenSimpleInterpolation;
    secondary: import("styled-components").FlattenSimpleInterpolation;
    outline: import("styled-components").FlattenSimpleInterpolation;
    chromeless: import("styled-components").FlattenSimpleInterpolation;
    buttonbar: import("styled-components").FlattenSimpleInterpolation;
    toolbar: import("styled-components").FlattenSimpleInterpolation;
};
export declare const buttonSizeCss: {
    dense: import("styled-components").FlattenSimpleInterpolation;
    compact: import("styled-components").FlattenSimpleInterpolation;
    default: import("styled-components").FlattenSimpleInterpolation;
    large: import("styled-components").FlattenSimpleInterpolation;
};
export declare const StyledButton: import("styled-components").StyledComponent<"button", import("../../helpers/theme").GlobalAppThemeInterface, StyledButtonProps, never>;
export declare type StyledButtonProps = {
    disabled: boolean;
    display: ButtonDisplay;
    mode: ButtonMode;
    pressed: boolean;
    size: ButtonSize;
    status?: (props: {
        style: React.CSSProperties;
    }) => ReactNode;
    cssOverrides: CommonComponentType['cssOverrides'];
    as?: CommonComponentType['as'];
    className: string;
    type: 'button' | 'reset' | 'submit';
    onClick: ButtonOnClick;
    isActive: boolean;
};
declare type IconProps = {
    iconLeft?: IconType;
    iconRight?: IconType;
    iconSize?: number;
};
export declare type ButtonOnClick = (event: MouseEvent<HTMLButtonElement>) => void;
declare type FunctionalProps = {
    className?: string;
    disabled?: boolean;
    display?: ButtonDisplay;
    isActive?: boolean;
    isLoading?: boolean;
    mode?: ButtonMode;
    onClick?: ButtonOnClick;
    onMouseDown?: ButtonOnClick;
    onMouseUp?: ButtonOnClick;
    onMouseEnter?: ButtonOnClick;
    onMouseLeave?: ButtonOnClick;
    pressed?: boolean;
    ref?: React.Ref<HTMLElement>;
    size?: ButtonSize;
    status?: (props: {
        style: React.CSSProperties;
    }) => ReactNode;
    title?: string;
    type?: 'button' | 'reset' | 'submit';
};
declare type CommonProps = CommonComponentType & LinkProps & {
    passedAs?: ReactType;
};
export declare type ButtonProps = CommonProps & IconProps & FunctionalProps;
export declare const Button: FC<ButtonProps>;
export {};
