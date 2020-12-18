import { Component } from 'react';
import { SimpleInterpolation } from 'styled-components';
import { ToggleSize } from '@monorail/visualComponents/toggle/toggleTypes';
export declare const Slider: import("styled-components").StyledComponent<"div", import("../../helpers/theme").GlobalAppThemeInterface, Slider, never>;
declare type Slider = {
    toggleSize: ToggleSize;
};
declare type ToggleProps = {
    toggleSize: ToggleSize;
    checked: boolean;
    cssOverrides?: SimpleInterpolation;
    onChange?: (checked: boolean) => void;
    disabled?: boolean;
};
export declare class Toggle extends Component<ToggleProps> {
    static defaultProps: {
        toggleSize: ToggleSize;
    };
    render(): JSX.Element;
}
export {};
