/// <reference types="@monorail/typings/styled-components" />
import React, { FC, MouseEvent, ReactNode, ReactType } from 'react';
import { CommonComponentType, LinkProps } from '@monorail/types';
import { ButtonDisplay, ButtonMode, ButtonSize } from '@monorail/visualComponents/buttons/buttonTypes';
import { IconType } from '@monorail/visualComponents/icon/IconType';
export declare const buttonDisplayCss: {
    primary: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<import("../../helpers/theme").GlobalAppThemeInterface>>;
    secondary: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<import("../../helpers/theme").GlobalAppThemeInterface>>;
    outline: import("styled-components").FlattenSimpleInterpolation;
    chromeless: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<import("../../helpers/theme").GlobalAppThemeInterface>>;
    buttonbar: import("styled-components").FlattenSimpleInterpolation;
    toolbar: import("styled-components").FlattenSimpleInterpolation;
};
export declare const buttonPressedDisplayCss: {
    primary: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<import("../../helpers/theme").GlobalAppThemeInterface>>;
    secondary: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<import("../../helpers/theme").GlobalAppThemeInterface>>;
    outline: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<import("../../helpers/theme").GlobalAppThemeInterface>>;
    chromeless: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<import("../../helpers/theme").GlobalAppThemeInterface>>;
    buttonbar: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<import("../../helpers/theme").GlobalAppThemeInterface>>;
    toolbar: import("styled-components").FlattenSimpleInterpolation;
};
export declare const buttonSizeCss: {
    dense: import("styled-components").FlattenSimpleInterpolation;
    compact: import("styled-components").FlattenSimpleInterpolation;
    default: import("styled-components").FlattenSimpleInterpolation;
    large: import("styled-components").FlattenSimpleInterpolation;
};
export declare const StyledButton: any;
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
    onClick: OnClick;
    isActive: boolean;
};
declare type IconProps = {
    iconLeft?: IconType;
    iconRight?: IconType;
    iconSize?: number;
};
export declare type OnClick = (event: MouseEvent<HTMLButtonElement>) => void;
declare type FunctionalProps = {
    className?: string;
    disabled?: boolean;
    display?: ButtonDisplay;
    isActive?: boolean;
    isLoading?: boolean;
    mode?: ButtonMode;
    onClick?: OnClick;
    onMouseDown?: OnClick;
    onMouseUp?: OnClick;
    onMouseEnter?: OnClick;
    onMouseLeave?: OnClick;
    pressed?: boolean;
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
//# sourceMappingURL=Button.d.ts.map