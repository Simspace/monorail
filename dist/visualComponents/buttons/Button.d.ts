import React, { FC, MouseEvent, ReactNode, ReactType } from 'react';
import { CommonComponentType, LinkProps } from '@monorail/types';
import { ButtonDisplay, ButtonMode, ButtonSize } from '@monorail/visualComponents/buttons/buttonTypes';
export declare const buttonDisplayCss: {
    [ButtonDisplay.Primary]: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<import("../../helpers/theme").GlobalAppThemeInterface>>;
    [ButtonDisplay.Secondary]: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<import("../../helpers/theme").GlobalAppThemeInterface>>;
    [ButtonDisplay.Outline]: import("styled-components").FlattenSimpleInterpolation;
    [ButtonDisplay.Chromeless]: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<import("../../helpers/theme").GlobalAppThemeInterface>>;
    [ButtonDisplay.ButtonBar]: import("styled-components").FlattenSimpleInterpolation;
    [ButtonDisplay.Toolbar]: import("styled-components").FlattenSimpleInterpolation;
};
export declare const buttonPressedDisplayCss: {
    [ButtonDisplay.Primary]: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<import("../../helpers/theme").GlobalAppThemeInterface>>;
    [ButtonDisplay.Secondary]: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<import("../../helpers/theme").GlobalAppThemeInterface>>;
    [ButtonDisplay.Outline]: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<import("../../helpers/theme").GlobalAppThemeInterface>>;
    [ButtonDisplay.Chromeless]: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<import("../../helpers/theme").GlobalAppThemeInterface>>;
    [ButtonDisplay.ButtonBar]: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<import("../../helpers/theme").GlobalAppThemeInterface>>;
    [ButtonDisplay.Toolbar]: import("styled-components").FlattenSimpleInterpolation;
};
export declare const buttonSizeCss: {
    [ButtonSize.Dense]: import("styled-components").FlattenSimpleInterpolation;
    [ButtonSize.Compact]: import("styled-components").FlattenSimpleInterpolation;
    [ButtonSize.Default]: import("styled-components").FlattenSimpleInterpolation;
    [ButtonSize.Large]: import("styled-components").FlattenSimpleInterpolation;
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
    onClick: OnClick;
    isActive: boolean;
};
declare type IconProps = {
    iconLeft?: string;
    iconRight?: string;
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
