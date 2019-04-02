import React from 'react';
import { SimpleInterpolation } from 'styled-components';
import { CommonComponentType } from '@monorail/types';
import { PopOverToggleProps } from '@monorail/popOver/PopOver';
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
}, never>;
export declare const SidebarMenuContainer: import("styled-components").StyledComponent<"div", any, CommonComponentType, never>;
export declare const SidebarMenuItemDropDownToggle: import("styled-components").StyledComponent<({ title, subtitle, iconName, isOpen, cssOverrides, isSideBarCollapsed, ...otherProps }: any) => JSX.Element, any, CommonComponentType & PopOverToggleProps & {
    disabled?: boolean | undefined;
    title: string;
    subtitle?: string | undefined;
    iconName: string;
    isSideBarCollapsed: boolean;
}, never>;
export declare const SidebarMenuContextRibbon: import("styled-components").StyledComponent<"div", any, CommonComponentType, never>;
export declare const SideBarMenuDivider: import("styled-components").StyledComponent<"div", any, {}, never>;
