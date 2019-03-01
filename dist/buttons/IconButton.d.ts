import React, { Component, MouseEvent } from 'react';
import { SimpleInterpolation } from 'styled-components';
import { ButtonSize, IconButtonDisplay, IconButtonShape } from '@monorail/buttons/buttonTypes';
export declare const CCIconButton: import("styled-components").StyledComponentClass<CCIconButtonProps, any, CCIconButtonProps & React.ClassAttributes<HTMLButtonElement> & React.ButtonHTMLAttributes<HTMLButtonElement>>;
declare type CCIconButtonProps = {
    css?: SimpleInterpolation;
    darkMode?: boolean;
    disabled?: boolean;
    display: IconButtonDisplay;
    shape?: IconButtonShape;
    iconCss?: SimpleInterpolation;
    onClick?: (event: MouseEvent<Element>) => void;
    size: ButtonSize;
    type: string;
};
export declare type IconButtonProps = CCIconButtonProps & {
    icon: string;
};
export declare class IconButton extends Component<IconButtonProps> {
    static defaultProps: {
        display: IconButtonDisplay;
        size: ButtonSize;
        shape: IconButtonShape;
        type: string;
    };
    render(): JSX.Element;
}
export {};
