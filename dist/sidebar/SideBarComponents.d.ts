import React, { FunctionComponent } from 'react';
import { SimpleInterpolation } from 'styled-components';
import { PopOverToggleProps } from '@monorail/popOver/PopOver';
import { CommonComponentType } from '@monorail/types';
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
export declare const SidebarMenuItemDropDownToggle: import("styled-components").StyledComponent<({ title, subtitle, iconName, isActive, isSideBarCollapsed, ...domProps }: any) => JSX.Element, any, CommonComponentType & PopOverToggleProps & {
    disabled?: boolean | undefined;
    title: string;
    subtitle?: string | undefined;
    iconName: string;
    isSideBarCollapsed: boolean;
}, never>;
export declare const SideBarMenuDivider: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const SidebarBack: FunctionComponent<{
    to: string;
    title: string;
    byline: string;
}>;
