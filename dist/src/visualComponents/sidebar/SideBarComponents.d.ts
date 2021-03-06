import React, { FC } from 'react';
import { FlattenSimpleInterpolation, SimpleInterpolation } from 'styled-components';
import { FontSizes } from '@monorail/helpers/exports';
import { PopOverToggleProps } from '@monorail/metaComponents/popOver/PopOver';
import { CommonComponentType, CssOverridesType } from '@monorail/types';
import { ButtonDisplay, IconButtonShape } from '@monorail/visualComponents/buttons/buttonTypes';
export declare const sideBarCollapsedTransitionDuration = 150;
export declare const sideBarCollapsedTransition: (props: {
    properties?: Array<string>;
    isSideBarCollapsed: boolean;
}) => SimpleInterpolation;
export declare enum SidebarContainerAnimationPose {
    Open = "open",
    Collapsed = "collapsed"
}
export declare const SidebarContainer: import("styled-components").StyledComponent<React.ComponentType<any>, any, CommonComponentType & {
    pose: string;
    backgroundColor: FlattenSimpleInterpolation;
}, never>;
export declare const SidebarBack: FC<{
    to: string;
    title: string;
    byline: string;
    display?: ButtonDisplay;
    shape?: IconButtonShape;
}>;
export declare const SidebarMenuContainerFullWidth: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const SidebarMenuContainer: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<{
    containerCssOverrides?: any;
    onScroll?: ((event: React.UIEvent<HTMLDivElement>) => void) | undefined;
    children?: React.ReactNode;
} & React.RefAttributes<HTMLDivElement>>, any, CommonComponentType & {
    isSideBarCollapsed: boolean;
}, never>;
export declare const SidebarMenuItemDropDownToggle: import("styled-components").StyledComponent<({ title, subtitle, iconName, isActive, isSideBarCollapsed, ...domProps }: any) => JSX.Element, any, CommonComponentType & PopOverToggleProps & {
    disabled?: boolean | undefined;
    title: string;
    subtitle?: string | undefined;
    iconName: string;
    isSideBarCollapsed: boolean;
}, never>;
declare type SideBarMenuCollapsedProps = {
    isSideBarCollapsed: boolean;
};
export declare const SideBarMenuDivider: import("styled-components").StyledComponent<"div", any, SideBarMenuCollapsedProps, never>;
export declare const SideBarMenuHeader: FC<{
    isSideBarCollapsed: boolean;
    header: string;
    fontSize?: FontSizes;
    cssOverrides?: CssOverridesType;
}>;
export {};
