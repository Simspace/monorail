import React, { Component } from 'react';
import { ButtonDisplay, ButtonSize, ButtonsBarMode } from '@monorail/buttons/buttonTypes';
import { CommonComponentType } from '@monorail/types';
/**
 * Buttons Bar Props
 */
declare type ButtonsBarProps = CommonComponentType & {
    display: ButtonDisplay;
    size: ButtonSize;
    multiple: boolean;
    required: boolean;
    mode: ButtonsBarMode;
    onChange: (index: number, state: Array<boolean>) => void;
};
/**
 * Buttons Bar State
 */
declare type ButtonsBarState = {
    indicatorLeft: number;
    indicatorTransitionDuration: number;
    indicatorWidth: number;
    buttonsStatus: Array<boolean>;
    buttonsRef: Array<React.RefObject<HTMLDivElement>>;
    lastActiveIndex: number;
};
/**
 * ToolbarsContainer
 * Use this container for displaying multiple Toolbars in a single row
 */
export declare const ToolbarsContainer: import("styled-components").StyledComponent<"div", any, {}, never>;
/**
 * Buttons Bar
 */
export declare class ButtonsBar extends Component<ButtonsBarProps, ButtonsBarState> {
    state: ButtonsBarState;
    static defaultProps: {
        display: ButtonDisplay;
        size: ButtonSize;
        multiple: boolean;
        required: boolean;
        mode: ButtonsBarMode;
        css: string;
        onChange: () => void;
    };
    componentDidMount(): void;
    getIndicatorParams: () => {
        indicatorWidth: number;
        indicatorLeft: number;
    };
    updateActive: (index?: number) => void;
    renderBar(): (false | JSX.Element)[];
    /**
     * Set indicator params positioning after the ButtonsBar have been rendered
     */
    componentDidUpdate(): void;
    render(): JSX.Element;
}
export {};
