import { MouseEvent, ReactType } from 'react';
import { ButtonDisplay, ButtonMode, ButtonSize } from '@monorail/buttons/buttonTypes';
import { FCwDP } from '@monorail/sharedHelpers/react';
import { CommonComponentType, LinkProps } from '@monorail/types';
export declare const buttonDisplayCss: {
    [ButtonDisplay.Primary]: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<import("../helpers/theme").GlobalAppThemeInterface>>;
    [ButtonDisplay.Secondary]: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<import("../helpers/theme").GlobalAppThemeInterface>>;
    [ButtonDisplay.Outline]: import("styled-components").FlattenSimpleInterpolation;
    [ButtonDisplay.Chromeless]: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<import("../helpers/theme").GlobalAppThemeInterface>>;
    [ButtonDisplay.ButtonBar]: import("styled-components").FlattenSimpleInterpolation;
    [ButtonDisplay.Toolbar]: import("styled-components").FlattenSimpleInterpolation;
};
export declare const buttonPressedDisplayCss: {
    [ButtonDisplay.Primary]: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<import("../helpers/theme").GlobalAppThemeInterface>>;
    [ButtonDisplay.Secondary]: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<import("../helpers/theme").GlobalAppThemeInterface>>;
    [ButtonDisplay.Outline]: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<import("../helpers/theme").GlobalAppThemeInterface>>;
    [ButtonDisplay.Chromeless]: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<import("../helpers/theme").GlobalAppThemeInterface>>;
    [ButtonDisplay.ButtonBar]: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<import("../helpers/theme").GlobalAppThemeInterface>>;
    [ButtonDisplay.Toolbar]: import("styled-components").FlattenSimpleInterpolation;
};
export declare const buttonSizeCss: {
    [ButtonSize.Dense]: import("styled-components").FlattenSimpleInterpolation;
    [ButtonSize.Compact]: import("styled-components").FlattenSimpleInterpolation;
    [ButtonSize.Default]: import("styled-components").FlattenSimpleInterpolation;
    [ButtonSize.Large]: import("styled-components").FlattenSimpleInterpolation;
};
export declare const StyledButton: import("styled-components").StyledComponent<"button", import("../helpers/theme").GlobalAppThemeInterface, StyleProps, never>;
declare type IconProps = {
    iconLeft: string;
    iconRight: string;
};
export declare type OnClick = (event: MouseEvent<HTMLButtonElement>) => void;
declare type FunctionalProps = {
    className: string;
    disabled: boolean;
    display: ButtonDisplay;
    isActive: boolean;
    mode: ButtonMode;
    onClick: OnClick;
    onMouseDown?: OnClick;
    onMouseUp?: OnClick;
    pressed: boolean;
    size: ButtonSize;
    title?: string;
    type: 'button' | 'reset' | 'submit';
};
declare type DefaultProps = IconProps & FunctionalProps;
declare type CommonProps = CommonComponentType & LinkProps & {
    passedAs?: ReactType;
};
declare type StyleProps = CommonProps & FunctionalProps;
export declare type ButtonProps = CommonProps & DefaultProps;
export declare const buttonDefaultProps: DefaultProps;
export declare const Button: FCwDP<CommonProps, DefaultProps>;
export {};
