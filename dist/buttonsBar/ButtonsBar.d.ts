import { ButtonDisplay, ButtonsBarMode, ButtonSize } from '@monorail/buttons/buttonTypes';
import { FCwDP } from '@monorail/sharedHelpers/react';
import { CommonComponentType } from '@monorail/types';
/**
 * Buttons Bar Props
 */
declare type ButtonsBarProps = {
    display: ButtonDisplay;
    size: ButtonSize;
    mode: ButtonsBarMode;
};
declare type ButtonsBarContainerProps = CommonComponentType & {
    mode: ButtonsBarMode;
};
export declare const ButtonsBarContainer: import("styled-components").StyledComponent<"div", import("../helpers/theme").GlobalAppThemeInterface, ButtonsBarContainerProps, never>;
/**
 * ToolbarsContainer
 * Use this container for displaying multiple Toolbars in a single row
 */
export declare const ToolbarsContainer: import("styled-components").StyledComponent<"div", import("../helpers/theme").GlobalAppThemeInterface, {}, never>;
/**
 * Buttons Bar
 */
export declare const ButtonsBar: FCwDP<CommonComponentType, ButtonsBarProps>;
export {};
