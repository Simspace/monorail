import { Component, MouseEvent } from 'react';
import { ButtonDisplay, ButtonSize, ButtonMode } from '@monorail/buttons/buttonTypes';
import { CommonComponentType, LinkProps } from '@monorail/types';
export declare const buttonDisplayCss: {
    [ButtonDisplay.Primary]: import("styled-components").FlattenSimpleInterpolation;
    [ButtonDisplay.Secondary]: import("styled-components").FlattenSimpleInterpolation;
    [ButtonDisplay.Outline]: import("styled-components").FlattenSimpleInterpolation;
    [ButtonDisplay.Chromeless]: import("styled-components").FlattenSimpleInterpolation;
    [ButtonDisplay.ButtonBar]: import("styled-components").FlattenSimpleInterpolation;
    [ButtonDisplay.Toolbar]: import("styled-components").FlattenSimpleInterpolation;
};
export declare const buttonPressedDisplayCss: {
    [ButtonDisplay.Primary]: import("styled-components").FlattenSimpleInterpolation;
    [ButtonDisplay.Secondary]: import("styled-components").FlattenSimpleInterpolation;
    [ButtonDisplay.Outline]: import("styled-components").FlattenSimpleInterpolation;
    [ButtonDisplay.Chromeless]: import("styled-components").FlattenSimpleInterpolation;
    [ButtonDisplay.ButtonBar]: import("styled-components").FlattenSimpleInterpolation;
    [ButtonDisplay.Toolbar]: import("styled-components").FlattenSimpleInterpolation;
};
export declare const buttonSizeCss: {
    [ButtonSize.Dense]: import("styled-components").FlattenSimpleInterpolation;
    [ButtonSize.Compact]: import("styled-components").FlattenSimpleInterpolation;
    [ButtonSize.Default]: import("styled-components").FlattenSimpleInterpolation;
    [ButtonSize.Large]: import("styled-components").FlattenSimpleInterpolation;
};
export declare const StyledButton: import("styled-components").StyledComponent<"button", any, ButtonProps, never>;
declare type ButtonState = {
    initial: boolean;
    previous: boolean;
    pressed: boolean;
};
declare type IconProps = {
    iconLeft: string;
    iconRight: string;
};
export declare type ButtonProps = CommonComponentType & LinkProps & {
    size: ButtonSize;
    display: ButtonDisplay;
    disabled: boolean;
    mode: ButtonMode;
    onClick: (event: MouseEvent<HTMLButtonElement>) => void;
    pressed: boolean;
    type: 'button' | 'reset' | 'submit';
};
declare type Props = ButtonProps & IconProps;
export declare const buttonDefaultProps: {
    display: ButtonDisplay;
    size: ButtonSize;
    type: string;
    onClick: () => void;
    disabled: boolean;
    pressed: boolean;
    mode: ButtonMode;
    iconLeft: string;
    iconRight: string;
};
export declare class Button extends Component<Props, ButtonState> {
    static defaultProps: {
        display: ButtonDisplay;
        size: ButtonSize;
        type: string;
        onClick: () => void;
        disabled: boolean;
        pressed: boolean;
        mode: ButtonMode;
        iconLeft: string;
        iconRight: string;
    };
    state: ButtonState;
    /**
     * Keep initial pressed state to compare when new props arrive
     */
    componentDidMount(): void;
    static getDerivedStateFromProps(nextProps: ButtonProps, prevState: ButtonState): ButtonState;
    /**
     * Click event handler for Push buttons
     */
    private onClickHandler;
    render(): JSX.Element;
}
export {};
