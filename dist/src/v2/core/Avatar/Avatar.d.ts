import React from 'react';
import * as MUI from '@material-ui/core';
import { IconButton } from '@monorail/v2/core/IconButton/IconButton';
import { OmitBannedProps } from '@monorail/v2/shared/helpers';
export declare const getAvatarInitials: (fullName: string) => string[];
declare const DISPLAY: {
    readonly Default: "default";
    readonly Team: "team";
};
declare type Display = typeof DISPLAY[keyof typeof DISPLAY];
export declare type AvatarProps = OmitBannedProps<Omit<MUI.AvatarProps, 'variant' | 'onClick'>> & {
    display?: Display;
    size?: 16 | 24 | 32 | 40 | 48 | 56 | 64;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
export declare const StyledAvatar: import("styled-components").StyledComponent<typeof Avatar, import("../../../helpers/theme").GlobalAppThemeInterface, {
    size: 56 | 48 | 32 | 40 | 16 | 64 | 24;
    display: Display;
    component: typeof IconButton | undefined;
}, "display" | "size" | "component">;
/**
 * - [Avatar | Material-UI](https://material-ui.com/components/avatars/#avatar)
 * - [Avatar | Monorail Figma](https://www.figma.com/file/dKL9YeHgWyxmRHuIjs38f3O9/Monorail-Components?node-id=953%3A7904)
 */
export declare function Avatar(props: AvatarProps): JSX.Element;
export {};
