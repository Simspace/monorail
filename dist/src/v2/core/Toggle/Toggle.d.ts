/// <reference types="react" />
import * as MUI from '@material-ui/core';
import { OmitBannedProps } from '@monorail/v2/shared/helpers';
declare const SIZE: {
    readonly Default: "default";
    readonly Large: "large";
};
declare type Size = typeof SIZE[keyof typeof SIZE];
export declare type ToggleProps = OmitBannedProps<MUI.SwitchProps> & {
    size?: Size;
};
export declare const StyledSwitch: import("styled-components").StyledComponent<typeof Toggle, import("../../../helpers/theme").GlobalAppThemeInterface, {
    size: Size;
}, "size">;
/**
 * Toggle switch
 *
 * - Use a (boolean) Toggle when its change performs an instantaneous action
 *   - [Toggle vs Checkbox](https://uxplanet.org/checkbox-vs-toggle-switch-7fc6e83f10b8)
 * - [Switch | Material-UI](https://material-ui.com/components/switches/#switch)
 * - [Toggle | Monorail Figma](https://www.figma.com/file/dKL9YeHgWyxmRHuIjs38f3O9/Monorail-Components?node-id=2233%3A9077)
 */
export declare function Toggle(props: ToggleProps): JSX.Element;
export {};
