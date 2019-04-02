import { Component, MouseEvent } from 'react';
import { SimpleInterpolation } from 'styled-components';
import { ButtonSize, ButtonDisplay, IconButtonShape } from '@monorail/buttons/buttonTypes';
export declare const CCIconButton: import("styled-components").StyledComponent<"button", any, CCIconButtonProps, never>;
declare type CCIconButtonProps = {
    cssOverrides?: SimpleInterpolation;
    darkMode?: boolean;
    disabled?: boolean;
    display: ButtonDisplay;
    shape?: IconButtonShape;
    iconCss?: SimpleInterpolation;
    onClick?: (event: MouseEvent<Element>) => void;
    size: ButtonSize;
    type: 'button' | 'reset' | 'submit';
    className?: string;
};
export declare type IconButtonProps = CCIconButtonProps & {
    icon: string;
};
export declare class IconButton extends Component<IconButtonProps> {
    static defaultProps: {
        display: ButtonDisplay;
        size: ButtonSize;
        shape: IconButtonShape;
        type: string;
    };
    render(): JSX.Element;
}
export {};
