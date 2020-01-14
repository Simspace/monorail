import { FC } from 'react';
import { CommonComponentType } from '@monorail/types';
import { ButtonDisplay, ButtonsBarMode, ButtonSize } from '@monorail/visualComponents/buttons/buttonTypes';
/**
 * Buttons Bar Props
 */
declare type ButtonsBarProps = CommonComponentType & {
    display?: ButtonDisplay;
    size?: ButtonSize;
    mode?: ButtonsBarMode;
};
declare type ButtonsBarContainerProps = CommonComponentType & {
    mode: ButtonsBarMode;
};
export declare const ButtonsBarContainer: import("styled-components").StyledComponent<"div", import("../../helpers/theme").GlobalAppThemeInterface, ButtonsBarContainerProps, never>;
/**
 * ToolbarsContainer
 * Use this container for displaying multiple Toolbars in a single row
 */
export declare const ToolbarsContainer: import("styled-components").StyledComponent<"div", import("../../helpers/theme").GlobalAppThemeInterface, {}, never>;
/**
 * Buttons Bar
 */
export declare const ButtonsBar: FC<ButtonsBarProps>;
export {};
