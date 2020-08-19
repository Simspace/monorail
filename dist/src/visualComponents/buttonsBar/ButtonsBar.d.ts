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
export declare const ButtonsBarContainer: any;
/**
 * ToolbarsContainer
 * Use this container for displaying multiple Toolbars in a single row
 */
export declare const ToolbarsContainer: any;
/**
 * Buttons Bar
 */
export declare const ButtonsBar: FC<ButtonsBarProps>;
export {};
//# sourceMappingURL=ButtonsBar.d.ts.map