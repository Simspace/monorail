import { Component } from 'react';
import { SimpleInterpolation } from 'styled-components';
import { ButtonDisplay, ButtonSize, IconButtonShape } from '@monorail/buttons/buttonTypes';
import { ButtonProps } from '@monorail/buttons/Button';
declare type CCIconButtonProps = ButtonProps & {
    darkMode: boolean;
    shape: IconButtonShape;
    iconCss: SimpleInterpolation;
};
export declare type IconButtonProps = CCIconButtonProps & {
    icon: string;
};
export declare class IconButton extends Component<IconButtonProps> {
    static defaultProps: {
        darkMode: boolean;
        shape: IconButtonShape;
        iconCss: import("styled-components").FlattenSimpleInterpolation;
        display: ButtonDisplay;
        size: ButtonSize;
        type: string;
        onClick: () => void;
        disabled: boolean;
        pressed: boolean;
        mode: import("./buttonTypes").ButtonMode;
        iconLeft: string;
        iconRight: string;
    };
    render(): JSX.Element;
}
export {};
