import { Component, MouseEvent } from 'react';
import { ButtonDisplay, ButtonSize } from '@monorail/buttons/buttonTypes';
import { CommonComponentType } from '@monorail/types';
import { LinkProps } from '@monorail/list/List';
export declare const buttonDisplayCss: {
    [ButtonDisplay.Primary]: import("styled-components").FlattenSimpleInterpolation;
    [ButtonDisplay.Secondary]: import("styled-components").FlattenSimpleInterpolation;
    [ButtonDisplay.Outline]: import("styled-components").FlattenSimpleInterpolation;
    [ButtonDisplay.Chromeless]: import("styled-components").FlattenSimpleInterpolation;
};
export declare const buttonSizeCss: {
    [ButtonSize.Dense]: import("styled-components").FlattenSimpleInterpolation;
    [ButtonSize.Compact]: import("styled-components").FlattenSimpleInterpolation;
    [ButtonSize.Default]: import("styled-components").FlattenSimpleInterpolation;
    [ButtonSize.Large]: import("styled-components").FlattenSimpleInterpolation;
};
export declare type ButtonProps = CommonComponentType & LinkProps & {
    size: ButtonSize;
    display: ButtonDisplay;
    disabled?: boolean;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    type: 'button' | 'reset' | 'submit';
};
export declare class Button extends Component<ButtonProps> {
    static defaultProps: {
        display: ButtonDisplay;
        size: ButtonSize;
        type: string;
    };
    render(): JSX.Element;
}
