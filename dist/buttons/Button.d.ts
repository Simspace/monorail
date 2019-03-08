import { Component, MouseEvent } from 'react';
import { SimpleInterpolation } from 'styled-components';
import { ButtonDisplay, ButtonSize } from '@monorail/buttons/buttonTypes';
export declare const buttonDisplayCss: {
    [ButtonDisplay.Primary]: import("styled-components").InterpolationValue[];
    [ButtonDisplay.Secondary]: import("styled-components").InterpolationValue[];
    [ButtonDisplay.Outline]: import("styled-components").InterpolationValue[];
    [ButtonDisplay.Chromeless]: import("styled-components").InterpolationValue[];
};
export declare const buttonSizeCss: {
    [ButtonSize.Dense]: import("styled-components").InterpolationValue[];
    [ButtonSize.Compact]: import("styled-components").InterpolationValue[];
    [ButtonSize.Default]: import("styled-components").InterpolationValue[];
    [ButtonSize.Large]: import("styled-components").InterpolationValue[];
};
export declare type ButtonProps = {
    size: ButtonSize;
    display: ButtonDisplay;
    cssOverrides?: SimpleInterpolation;
    disabled?: boolean;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    type: string;
};
export declare class Button extends Component<ButtonProps> {
    static defaultProps: {
        display: ButtonDisplay;
        size: ButtonSize;
        type: string;
    };
    render(): JSX.Element;
}
