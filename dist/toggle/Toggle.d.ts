import { Component } from 'react';
import { ToggleSize } from '@monorail/toggle/toggleTypes';
import { SimpleInterpolation } from 'styled-components';
export declare const Slider: import("styled-components").StyledComponent<"div", any, Slider, never>;
declare type Slider = {
    toggleSize: ToggleSize;
};
declare type ToggleProps = {
    toggleSize: ToggleSize;
    checked: boolean;
    cssOverrides?: SimpleInterpolation;
    onChange?: (checked: boolean) => void;
};
export declare class Toggle extends Component<ToggleProps> {
    static defaultProps: {
        toggleSize: ToggleSize;
    };
    render(): JSX.Element;
}
export {};
