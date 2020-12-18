/// <reference types="react" />
import { Link } from 'react-router';
import * as MUI from '@material-ui/core';
import { Size } from '@monorail/v2/core/Button/Button';
import { OmitBannedProps } from '@monorail/v2/shared/helpers';
declare const DISPLAY: {
    readonly ChromelessAction: "chromelessAction";
    readonly Primary: "primary";
    readonly Outline: "outline";
    readonly Chromeless: "chromeless";
    readonly ChromelessContrast: "chromelessContrast";
};
export declare type Display = typeof DISPLAY[keyof typeof DISPLAY];
declare const SHAPE: {
    readonly Square: "square";
    readonly Circle: "circle";
};
declare type Shape = typeof SHAPE[keyof typeof SHAPE];
export declare const StyledIconButton: import("styled-components").StyledComponent<typeof IconButton, import("../../../helpers/theme").GlobalAppThemeInterface, {
    display: Display;
    shape: Shape;
    size: Size;
}, "display" | "size" | "shape">;
declare type IconButtonMonorailProps = {
    shape?: Shape;
    display?: Display;
    size?: Size;
    /**
     * label is required, but allow for explicit opt-out if necessary. If this prop requirement falls down, we should
     * look into custom eslint rules instead
     */
    'aria-label': string | null;
};
export declare type IconButtonProps = IconButtonMonorailProps & OmitBannedProps<MUI.IconButtonProps>;
/**
 * IconButton is a Button with an Icon!
 *
 * - [IconButton | Material-UI](https://material-ui.com/components/buttons/#icon-buttons)
 * - [IconButton | Monorail Figma](https://www.figma.com/file/dKL9YeHgWyxmRHuIjs38f3O9/Monorail-Components?node-id=16735%3A801)
 */
export declare function IconButton(props: IconButtonProps): JSX.Element;
declare type IconButtonLinkProps = IconButtonMonorailProps & OmitBannedProps<MUI.IconButtonProps<Link>>;
/**
 * IconButton with component overridden to react-router `Link` component
 */
export declare function IconButtonLink(props: IconButtonLinkProps): JSX.Element;
export {};
